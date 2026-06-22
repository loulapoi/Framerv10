import { footer, socials } from "../data/content";
import { Button } from "../components/ui/Button";
import { Calendar, Sparkle, XLogo, InstagramLogo, LinkedinLogo, DribbbleLogo } from "../components/ui/Icons";
import { Reveal } from "../components/ui/Reveal";
import "./Footer.css";

const socialIcons = { x: XLogo, instagram: InstagramLogo, linkedin: LinkedinLogo, dribbble: DribbbleLogo };

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand-col">
            <a className="footer__brand" href="#home">
              <span className="footer__mark"><Sparkle size={16} /></span>
              {footer.brand}
            </a>
            <p className="footer__tagline">{footer.tagline}</p>
            <Button variant="dark" icon={<Calendar size={16} />}>{footer.cta}</Button>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h5>Navigation</h5>
              <ul>{footer.nav.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
            </div>
            <div className="footer__col">
              <h5>Contacts</h5>
              <ul>{footer.contacts.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
            </div>
          </div>
        </div>

        <Reveal>
          <div className="footer__watermark">{footer.watermark}</div>
        </Reveal>

        <div className="footer__bottom">
          <span className="footer__peace"><img src={footer.peace} alt="peace" /></span>
          <span className="footer__copy">{footer.copyright}</span>
          <div className="footer__socials">
            {socials.map((sc) => {
              const Ico = socialIcons[sc.icon];
              return <a key={sc.label} href={sc.href} aria-label={sc.label}><Ico size={18} /></a>;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
