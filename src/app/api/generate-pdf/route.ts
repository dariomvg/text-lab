import { NextResponse } from 'next/server';
import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { html } = await req.json();
    const isProd = process.env.NODE_ENV === 'production';
    const executablePath = isProd ? await chromium.executablePath() : undefined;

    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath,
      headless: true,
      defaultViewport: { width: 1280, height: 800 },
    });

    const page = await browser.newPage();

    await page.setContent(
      `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>${html}</body></html>`,
      { waitUntil: 'networkidle0' }
    );

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
    });

    await browser.close();

    
    return new Response(Buffer.from(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="documento.pdf"',
      },
    });
  } catch (err) {
    console.error('Error generando PDF:', err);
    return NextResponse.json({ error: 'Error generando PDF' }, { status: 500 });
  }
}
