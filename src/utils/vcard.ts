import { BRAND_DATA } from '../data/content';

export function downloadVCard() {
  const vcardText = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${BRAND_DATA.fullName} (${BRAND_DATA.brandName})`,
    `N:Dominikphotofficial;DP;;;`,
    `ORG:DP.CORPORATION;Photography & Visual Arts`,
    `TITLE:Photographer & Creative Director`,
    `EMAIL;TYPE=INTERNET,WORK:${BRAND_DATA.email}`,
    `URL;TYPE=WORK:${BRAND_DATA.officialPortfolio}`,
    `URL;TYPE=SERVICES:https://portfolio.dominikphotofficial.lt/services.html`,
    `URL;TYPE=BOOKING:https://portfolio.dominikphotofficial.lt/tfp-booking.html`,
    `URL;TYPE=ECOSYSTEM:${BRAND_DATA.corporationUrl}`,
    `NOTE:DP / Dominikphotofficial — Official Digital Business Card. ${BRAND_DATA.subtitle}`,
    'END:VCARD',
  ].join('\r\n');

  const blob = new Blob([vcardText], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Dominikphotofficial_DP.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
