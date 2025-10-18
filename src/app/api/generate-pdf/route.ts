import { NextResponse } from 'next/server';
import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';

export async function POST(req: Request) {
  const { html } = await req.json();

  const executablePath =
    process.env.NODE_ENV === 'production'
      ? await chromium.executablePath()
      : undefined;

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath, 
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
  });

  await browser.close();

  return new NextResponse(Buffer.from(pdfBuffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="documento.pdf"',
    },
  });
}
