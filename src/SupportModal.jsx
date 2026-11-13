import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Headset, Mail, MessageCircle, Phone, ShieldCheck, X } from "lucide-react";

const WHATSAPP = "22374980744";
const EMAIL = "hamaatraore@gmail.com";

/** Accessible support popup. No invented help-center URL: its button opens our real FAQ. */
export default function SupportModal({ t }) {
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);
  const trigger = useRef(null);

  useEffect(() => {
    if (!open) return;
    const before = document.activeElement;
    document.body.classList.add("support-dialog-open");
    dialog.current?.querySelector("button")?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
      if (event.key !== "Tab" || !dialog.current) return;
      const elements = [...dialog.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )].filter((element) => !element.hidden);
      if (elements.length === 0) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("support-dialog-open");
      if (before?.isConnected) before.focus();
      else trigger.current?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);
  return (
    <>
      <button ref={trigger} className="floating-support" type="button" onClick={() => setOpen(true)}
        aria-label={t.support.open} aria-haspopup="dialog" aria-expanded={open}>
        <MessageCircle size={24} aria-hidden="true"/>
        <span>{t.support.trigger}</span>
      </button>

      {open && (
        <div className="support-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) close();
        }}>
          <section ref={dialog} className="support-dialog" role="dialog" aria-modal="true"
            aria-labelledby="support-title" aria-describedby="support-description">
            <div className="support-dialog__top">
              <span className="support-dialog__icon"><Headset size={21}/></span>
              <div><h2 id="support-title">{t.support.title}</h2>
                <p id="support-description">{t.support.intro}</p>
              </div>
              <button type="button" className="support-dialog__close" onClick={close} aria-label={t.support.close}><X size={20}/></button>
            </div>
            <div className="support-dialog__links">
              <a href="tel:+22374980744" className="support-dialog__option">
                <span className="support-option__icon support-option__icon--phone"><Phone size={20}/></span>
                <span><strong>{t.support.call}</strong><small>+223 74 98 07 44</small></span>
                <ArrowUpRight size={17}/>
              </a>
              <a href={"https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(t.contact.whatsappIntro)}
                target="_blank" rel="noopener noreferrer" className="support-dialog__option">
                <span className="support-option__icon support-option__icon--whatsapp"><MessageCircle size={20}/></span>
                <span><strong>{t.support.whatsapp}</strong><small>{t.support.whatsappSub}</small></span>
                <ArrowUpRight size={17}/>
              </a>
              <a href={"mailto:" + EMAIL} className="support-dialog__option">
                <span className="support-option__icon support-option__icon--email"><Mail size={20}/></span>
                <span><strong>{t.support.write}</strong><small>{EMAIL}</small></span>
                <ArrowUpRight size={17}/>
              </a>
            </div>
            <a className="support-dialog__help" href="#faq" onClick={close}>
              {t.support.help} <ArrowUpRight size={17}/>
            </a>
            <p className="support-dialog__safety"><ShieldCheck size={16}/>{t.support.safety}</p>
          </section>
        </div>
      )}
    </>
  );
}
