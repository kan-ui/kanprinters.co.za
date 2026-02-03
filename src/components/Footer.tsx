import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

type ContactInfo = {
  address?: {
    unit?: string;
    street?: string;
    suburb?: string;
    city?: string;
    postalCode?: string;
    country?: string;
  };
  phone?: {
    primary?: string;
    secondary?: string;
    voip?: string[];
  };
  email?: string;
} | null;

type SocialMedia = {
  facebook?: string;
  tiktok?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  whatsapp?: string;
} | null;

interface FooterProps {
  contactInfo?: ContactInfo;
  socialMedia?: SocialMedia;
}

export function Footer({ contactInfo, socialMedia }: FooterProps) {
  const address = contactInfo?.address;
  const phone = contactInfo?.phone;
  const email = contactInfo?.email ?? "kanprinters@mweb.co.za";

  const addressLines = [
    address?.unit,
    address?.street,
    address?.suburb,
    address?.city,
    address?.postalCode,
    address?.country,
  ].filter(Boolean) as string[];

  const primaryPhone = phone?.primary ?? "021 691 0170";
  const secondaryPhone = phone?.secondary ?? "021 691 0168";
  const voipNumbers = phone?.voip?.filter(Boolean) ?? ["021 007 1004", "087 701 2066"];

  const facebookUrl = socialMedia?.facebook ?? "https://www.facebook.com/pages/Kan-Screenprinters/512399395488737";
  const tiktokUrl = socialMedia?.tiktok ?? "https://www.tiktok.com/@kanscreen";
  const linkedinUrl = socialMedia?.linkedin ?? "http://za.linkedin.com/pub/kan-printers/4a/b50/a0b";
  const whatsappUrl = socialMedia?.whatsapp?.startsWith("http") ? socialMedia.whatsapp : `https://wa.me/${(socialMedia?.whatsapp ?? "27216910170").replace(/\D/g, "")}`;

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center"
              >
                <Image
                  src="/Logo/Resize the Kan Print.png"
                  alt="Kan Printers & Signs Logo"
                  width="280"
                  height="100"
                  className="h-20 md:h-24 w-auto object-contain"
                  quality={100}
                />
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Founded in 2000 by brothers Mario and Bradley Kanasashi, Kan Screenprinters 
              have grown from a family garage in Manenberg into a trusted printing hub in Lansdowne. 
              Rooted in craftsmanship, loyalty, and community trust, we blend traditional 
              screen-printing expertise with modern digital technologies.
            </div>
            
            <div className="max-w-md mt-4 text-sm text-gray-500 dark:text-gray-400">
              <p className="font-semibold mb-2">Contact Us:</p>
              {addressLines.length > 0 ? addressLines.map((line, i) => <p key={i}>{line}</p>) : (
                <>
                  <p>Unit 14 Regency Park</p>
                  <p>6 Induland Crescent, Lansdowne</p>
                  <p>Cape Town</p>
                </>
              )}
              <p className="mt-2">Tel: {primaryPhone}{secondaryPhone ? ` / ${secondaryPhone}` : ""}</p>
              {voipNumbers.length > 0 && <p>VOIP: {voipNumbers.join(" / ")}</p>}
              <p>Email: <a href={`mailto:${email}`} className="text-indigo-600 hover:underline">{email}</a></p>
            </div>

            <div className="mt-5">
              <a
                href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                target="_blank"
                rel="noopener"
                className="relative block w-44"
              >
                <Image
                  src="/img/vercel.svg"
                  alt="Powered by Vercel"
                  width="212"
                  height="44"
                />
              </a>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              <Link
                href="/#services"
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                Services
              </Link>
              <Link
                href="/#portfolio"
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                Portfolio
              </Link>
              <Link
                href="/#about"
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                About Us
              </Link>
              <Link
                href="/#contact"
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                Contact
              </Link>
              <Link
                href="/#faq"
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                FAQ
              </Link>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              <p className="w-full px-4 py-2 text-gray-500 dark:text-gray-300 font-semibold">
                Services
              </p>
              <p className="w-full px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                Screen Printing
              </p>
              <p className="w-full px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                Pad Printing
              </p>
              <p className="w-full px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                Digital Printing
              </p>
              <p className="w-full px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                Laser Engraving
              </p>
              <p className="w-full px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                Sublimation
              </p>
              <p className="w-full px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                Heat Transfer
              </p>
            </div>
          </div>
          <div className="">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              {tiktokUrl && (
                <a href={tiktokUrl} target="_blank" rel="noopener" aria-label="TikTok">
                  <span className="sr-only">TikTok</span>
                  <TikTok />
                </a>
              )}
              {facebookUrl && (
                <a href={facebookUrl} target="_blank" rel="noopener" aria-label="Facebook">
                  <span className="sr-only">Facebook</span>
                  <Facebook />
                </a>
              )}
              {linkedinUrl && (
                <a href={linkedinUrl} target="_blank" rel="noopener" aria-label="LinkedIn">
                  <span className="sr-only">Linkedin</span>
                  <Linkedin />
                </a>
              )}
              {whatsappUrl && (
                <a href={whatsappUrl} target="_blank" rel="noopener" aria-label="WhatsApp">
                  <span className="sr-only">WhatsApp</span>
                  <WhatsApp />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()} Kan Screenprinters. All rights reserved.
        </div>
      </Container>
    </div>
  );
}

const TikTok = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

const WhatsApp = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Backlink = () => {
  return (
    <a
      href="https://web3templates.com"
      target="_blank"
      rel="noopener"
      className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="29.5385" rx="2.76923" fill="#362F78" />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>

      <span>Web3Templates</span>
    </a>
  );
};
