import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

export const runtime = 'nodejs'; 

export async function POST(req: Request) {
  try {
    const { html } = await req.json();
    const isProd = process.env.NODE_ENV === 'production';

    
    const executablePath = isProd
      ? await chromium.executablePath()
      : process.platform === 'win32'
        ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
        : process.platform === 'linux'
          ? '/usr/bin/google-chrome'
          : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: {width: 1920, height: 1080},
      executablePath,
      headless: true,
    });

    const page = await browser.newPage();
    await page.setContent(
      `<!DOCTYPE html><html><head><meta charset="utf-8" /></head><body>${html}</body></html>`,
      { waitUntil: 'networkidle0' }
    );

    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
    await browser.close();

    return new Response(Buffer.from(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="documento.pdf"',
      },
    });
  } catch (err) {
    console.error('Error generando PDF:', err);
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
