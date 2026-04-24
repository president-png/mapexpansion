import React, { useEffect, useMemo, useState } from "react";

import basement from "./images/Basement.jpg";
import floor1 from "./images/Floor1.jpg";
import floor2 from "./images/Floor2.jpg";

import exterior1 from "./images/Exterior1.jpg";
import exterior2 from "./images/Exterior2.jpg";
import exterior3 from "./images/Exterior3.jpg";
import exterior4 from "./images/Exterior4.jpg";
import exterior5 from "./images/Exterior5.jpg";
import exterior6 from "./images/Exterior6.jpg";
import exterior7 from "./images/Exterior7.jpg";
import exterior8 from "./images/Exterior8.jpg";
import exterior9 from "./images/Exterior9.jpg";

import overview from "./images/Overview.jpg";

const DONATE_URL =
  "https://us.mohid.co/pa/pittsburgh/map/masjid/online/donation/37";

const SUGGESTIONS_EMAIL = "map.expansion@mapitt.org";
const SUGGESTIONS_SUBJECT = "MAP Expansion Website Suggestion";

const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  SUGGESTIONS_EMAIL
)}&su=${encodeURIComponent(SUGGESTIONS_SUBJECT)}`;

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null); // { src, alt, label } | null

  const galleryItems = useMemo(
    () => [
      { id: 1, tag: "Exterior", label: "Exterior View 1", img: exterior1 },
      { id: 2, tag: "Exterior", label: "Exterior View 2", img: exterior2 },
      { id: 3, tag: "Exterior", label: "Exterior View 3", img: exterior3 },
      { id: 4, tag: "Exterior", label: "Exterior View 4", img: exterior4 },
      { id: 5, tag: "Exterior", label: "Exterior View 5", img: exterior5 },
      { id: 6, tag: "Exterior", label: "Exterior View 6", img: exterior6 },
      { id: 7, tag: "Exterior", label: "Exterior View 7", img: exterior7 },
      { id: 8, tag: "Exterior", label: "Exterior View 8", img: exterior8 },
      { id: 9, tag: "Exterior", label: "Exterior View 9", img: exterior9 },

      { id: 10, tag: "Plans", label: "Basement Level", img: basement },
      { id: 11, tag: "Plans", label: "First Floor", img: floor1 },
      { id: 12, tag: "Plans", label: "Second Floor", img: floor2 },

      // Overview should be under Plans
      { id: 13, tag: "Plans", label: "Overview", img: overview },
    ],
    []
  );

  // Removed "Interior" since Overview is now under Plans
  const filters = ["All", "Exterior", "Plans"];

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((x) => x.tag === activeFilter);

  // Close lightbox with ESC
  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  // QR code image that points to DONATE_URL
  const qrSrc = useMemo(() => {
    const encoded = encodeURIComponent(DONATE_URL);
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encoded}`;
  }, []);

  return (
    <div className="min-h-screen bg-[#070A12] text-white">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_10%_10%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(800px_500px_at_90%_20%,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-white/10 backdrop-blur bg-[#070A12]/70">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
          <div className="min-w-0">
            <p className="font-semibold text-lg leading-tight truncate">
              Muslim Association of Greater Pittsburgh
            </p>
            <p className="text-sm text-white/70 font-medium">
              Community Center Expansion Project
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Light gray secondary */}
            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl border border-gray-300 bg-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-300 transition"
            >
              Email Suggestions
            </a>

            {/* Green primary */}
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
            >
              Donate Now
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-14 md:pt-16 grid md:grid-cols-2 gap-12 items-center">
        {/* left */}
        <div>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white/80">
              Recreation
            </span>
            <span className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white/80">
              Education
            </span>
            <span className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white/80">
              Community
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold mt-5 leading-tight">
            Honoring the Past.
            <br />
            Building the Future…
          </h1>

          <p className="text-white/70 mt-4 text-lg leading-relaxed">
            Explore the design drawings and exterior renderings for our community
            center expansion — and share suggestions with us as we move forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href="#gallery"
              className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-medium shadow-lg hover:bg-emerald-700 transition text-center"
            >
              View Drawings
            </a>

            <a
              href="#tour"
              className="px-6 py-3 rounded-2xl border border-gray-300 bg-gray-200 text-gray-900 shadow-lg hover:bg-gray-300 transition text-center"
            >
              3D Tour (Coming Soon)
            </a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl border border-gray-300 bg-gray-200 text-gray-900 hover:bg-gray-300 transition text-center"
            >
              Send a Suggestion
            </a>

            <a
              href={DONATE_URL}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition text-center"
            >
              Donate Now
            </a>
          </div>
        </div>

        {/* right hero images: left tall + two stacked on right */}
        <div className="grid gap-1 md:grid-cols-2">
          <div className="md:row-span-2">
            <ImageTile
              src={exterior1}
              alt="Exterior rendering 1"
              tall
              onClick={() =>
                setLightbox({
                  src: exterior1,
                  alt: "Exterior rendering 1",
                  label: "Exterior View 1",
                })
              }
            />
          </div>

          <ImageTile
            src={exterior2}
            alt="Exterior rendering 2"
            onClick={() =>
              setLightbox({
                src: exterior2,
                alt: "Exterior rendering 2",
                label: "Exterior View 2",
              })
            }
          />
          <div className="-mt-2">
            <ImageTile
              src={exterior3}
              alt="Exterior rendering 3"
              onClick={() =>
                setLightbox({
                  src: exterior3,
                  alt: "Exterior rendering 3",
                  label: "Exterior View 3",
                })
              }
            />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 pt-20">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-white/60">
            Design
          </p>
          <h2 className="text-3xl font-semibold mt-2">Explore the vision</h2>
          <p className="text-white/70 mt-3">
            Browse the exterior renderings and floor plans. (Click any image to
            enlarge.)
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {filters.map((t) => (
            <button
              key={t}
              onClick={() => setActiveFilter(t)}
              className={`px-4 py-2 rounded-2xl border border-gray-300 text-sm transition ${
                activeFilter === t
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Explore cards: medium gray background */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-gray-300 bg-gray-400 p-4 shadow-sm"
            >
              <button
                type="button"
                onClick={() =>
                  setLightbox({
                    src: item.img,
                    alt: item.label,
                    label: item.label,
                  })
                }
                className="block w-full text-left"
                aria-label={`Open ${item.label} larger`}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="h-48 w-full object-cover rounded-2xl border border-gray-300 hover:opacity-95 transition"
                  loading="lazy"
                />
              </button>

              <div className="flex justify-between mt-3 text-sm text-black">
                <span>{item.label}</span>
                <span className="text-gray-700">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3D TOUR */}
      <section id="tour" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <p className="text-xs tracking-widest uppercase text-white/60">
            Virtual Tour
          </p>
          <h2 className="text-3xl font-semibold mt-2">
            Walk through the future center
          </h2>
          <p className="text-white/70 mt-3 mb-8">
            Our 3D tour will be available soon.
          </p>
        </div>

        {/* Coming soon placeholder */}
        <div className="rounded-3xl overflow-hidden border border-gray-300 bg-gray-500/25 backdrop-blur-sm">
          <div className="w-full aspect-video flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-xl md:text-2xl font-semibold">Coming Soon</p>
              <p className="text-white/70 mt-2">
                We’re preparing an interactive 3D walkthrough. Check back soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT / DONATE + QR */}
      <section id="support" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-3xl border border-gray-300 bg-gray-500/25 backdrop-blur-sm p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="text-xs tracking-widest uppercase text-white/70">
                Support the project
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold mt-2">
                Help build what comes next
              </h3>
              <p className="text-white/75 mt-3 leading-relaxed">
                Your support helps move this expansion forward. Donate online,
                or scan the QR code to give from your phone.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={DONATE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition text-center"
                >
                  Donate Now
                </a>

                <a
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-2xl border border-gray-300 bg-gray-200 text-gray-900 hover:bg-gray-300 transition text-center"
                >
                  Email Suggestions
                </a>
              </div>

              <p className="mt-4 text-xs text-white/60">
                Or donate using this link:{" "}
                <span className="text-white/80 break-all">{DONATE_URL}</span>
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-gray-300 bg-white/5 p-5 flex items-center gap-5">
                <img
                  src={qrSrc}
                  alt="QR code to donate"
                  className="h-[140px] w-[140px] rounded-2xl border border-gray-300 bg-white"
                />
                <div>
                  <p className="font-semibold">Scan to donate</p>
                  <p className="text-sm text-white/75 mt-1">
                    Open your phone camera and point it at the QR code.
                  </p>
                  <a
                    href={DONATE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-sm underline text-white/80 hover:text-white"
                  >
                    Open donation page
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-center">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} Muslim Association of Greater
              Pittsburgh
            </p>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox ? (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-white/80">{lightbox.label}</p>
              <button
                type="button"
                className="px-3 py-1 rounded-lg border border-gray-300 bg-gray-200 text-gray-900 hover:bg-gray-300 text-sm transition"
                onClick={() => setLightbox(null)}
              >
                Close
              </button>
            </div>

            <div className="rounded-3xl overflow-hidden border border-gray-300 bg-white">
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain bg-white"
              />
            </div>

            <p className="mt-3 text-xs text-white/50">
              Tip: press <span className="text-white/70">Esc</span> to close.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ImageTile({ src, alt, tall = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full"
      aria-label={`Open ${alt} larger`}
    >
      <img
        src={src}
        alt={alt}
        className={[
          tall ? "h-80" : "h-40",
          "w-full object-cover rounded-3xl border border-gray-300 hover:opacity-95 transition",
        ].join(" ")}
        loading="lazy"
      />
    </button>
  );
}