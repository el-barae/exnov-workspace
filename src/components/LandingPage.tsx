"use client";

import Image from "next/image";
import { APP_NAME } from "@/config/app";
import { ThemeToggle } from "./ThemeToggle";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Cpu,
  FileSpreadsheet,
  FileText,
  FolderKanban,
  Layers,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

export function LandingPage({ onConnectClick }: { onConnectClick: () => void }) {
  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <main className="landing-page">
      {/* 1. Barre de navigation principale — pleine largeur */}
      <nav className="landing-topbar" aria-label="Navigation principale">
        <div className="landing-topbar-inner">
          <div className="login-brand" style={{ marginBottom: 0 }}>
            <Image
              src="/logo.png"
              alt="EXNOV"
              width={229}
              height={172}
              priority
              unoptimized
            />
            <span>
              {APP_NAME}
              <small>Bureau d’études & Ingénierie</small>
            </span>
          </div>

          <ul className="landing-nav-links">
            <li>
              <a
                href="#video-demo"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("video-demo");
                }}
              >
                <Play size={14} /> Démonstration
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("features");
                }}
              >
                <Layers size={14} /> Fonctionnalités
              </a>
            </li>
            <li>
              <a
                href="#advantages"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("advantages");
                }}
              >
                <ShieldCheck size={14} /> Atouts
              </a>
            </li>
          </ul>

          <div className="landing-topbar-actions">
            <ThemeToggle />
            <button
              type="button"
              className="nav-cta-btn"
              onClick={onConnectClick}
            >
              Se connecter <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section — bandeau pleine largeur */}
      <section className="landing-hero">
        <div className="landing-container landing-hero-grid">
          <div className="landing-hero-content">
            <p className="eyebrow landing-hero-eyebrow">
              <span /> L’ESPACE EXNOV
            </p>
            <h1>
              Vos projets.
              <br />
              Vos plans &amp; factures.
              <br />
              <em>Un seul espace.</em>
            </h1>
            <p className="landing-hero-description">
              De la conception architecturale au suivi de chantier et à la facturation
              réglementaire, centralisez vos missions d’ingénierie au même endroit.
            </p>

            <div className="hero-pills">
              <span className="hero-pill-item">
                <FolderKanban size={13} /> Suivi de projets
              </span>
              <span className="hero-pill-item">
                <FileSpreadsheet size={13} /> Factures &amp; Devis
              </span>
              <span className="hero-pill-item">
                <Compass size={13} /> Plans 2D &amp; DXF
              </span>
              <span className="hero-pill-item">
                <Sparkles size={13} /> Rapports IA &amp; CPS
              </span>
            </div>

            <div className="hero-actions">
              <button
                type="button"
                className="hero-btn-primary"
                onClick={onConnectClick}
              >
                Se connecter <ArrowRight size={14} />
              </button>
              <a
                href="#video-demo"
                className="hero-btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("video-demo");
                }}
              >
                <Play size={14} /> Voir la vidéo
              </a>
            </div>

            <div className="landing-hero-meta">
              <BookOpen size={15} />
              <span>Génie civil · Études techniques · Suivi des travaux</span>
            </div>
          </div>

          <div className="landing-hero-visual" aria-hidden="true">
            <div className="landing-hero-browser">
              <div className="browser-bar">
                <div className="browser-dots">
                  <span className="browser-dot browser-dot-red" />
                  <span className="browser-dot browser-dot-yellow" />
                  <span className="browser-dot browser-dot-green" />
                </div>
                <div className="browser-address">
                  workspace.exnov.ma/projets
                </div>
              </div>
              <Image
                src="/landing/espace-projets.png"
                alt=""
                width={960}
                height={600}
                priority
                unoptimized
              />
            </div>
            <div className="landing-hero-float landing-hero-float-top">
              <FileText size={16} />
              <div>
                <strong>Facture F-2026-0142</strong>
                <small>Payée · 48 500 DH</small>
              </div>
            </div>
            <div className="landing-hero-float landing-hero-float-bottom">
              <CheckCircle2 size={16} />
              <div>
                <strong>Plan R+2 validé</strong>
                <small>Export DXF · AutoCAD</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="landing-container">
        {/* 3. Section Démonstration Vidéo */}
        <section className="landing-section" id="video-demo">
          <div className="section-header-center">
            <span className="section-pill">
              <Play size={12} /> Démonstration Vidéo
            </span>
            <h2 className="section-title">L’espace de travail en action</h2>
            <p className="section-description">
              Regardez un aperçu complet du flux de travail : navigation fluide
              entre les chantiers, conception de plans 2D, rédaction et facturation.
            </p>
          </div>

          <div className="browser-mockup">
            <div className="browser-bar">
              <div className="browser-dots">
                <span className="browser-dot browser-dot-red" />
                <span className="browser-dot browser-dot-yellow" />
                <span className="browser-dot browser-dot-green" />
              </div>
              <div className="browser-address">
                https://workspace.exnov.ma/projets
              </div>
            </div>
            <div className="browser-video-container">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                poster="/landing/espace-projets.png"
              >
                <source src="/landing/exnov-workspace.mp4" type="video/mp4" />
                Votre navigateur ne prend pas en charge la lecture vidéo.
              </video>
            </div>
          </div>
        </section>

        {/* 4. Section Fonctionnalités Détaillées */}
        <section className="landing-section" id="features">
          <div className="section-header-center">
            <span className="section-pill">
              <Layers size={12} /> Fonctionnalités Phares
            </span>
            <h2 className="section-title">
              Tout ce dont votre bureau d’études a besoin
            </h2>
            <p className="section-description">
              Des outils spécialisés conçus pour répondre aux normes techniques et
              réglementaires du secteur du bâtiment et des travaux publics.
            </p>
          </div>

          <div className="features-container">
            {/* Bloc 1 */}
            <div className="feature-item">
              <div className="feature-info">
                <span className="feature-badge">Facturation &amp; Devis</span>
                <h3 className="feature-title">
                  Factures et devis au millimètre, conformes aux exigences fiscales
                </h3>
                <p className="feature-description">
                  Édition complète de prestations avec calculs rigoureux : retenue
                  de garantie (7%), retenue à la source (1,5%), conversion automatique
                  du montant en toutes lettres en dirhams et gestion des centimes.
                </p>
                <ul className="feature-checklist">
                  <li>
                    <CheckCircle2 size={16} /> Export PDF vectoriel A4 identique à l’aperçu
                  </li>
                  <li>
                    <CheckCircle2 size={16} /> Export Word (.docx) sur modèle officiel Exnov
                  </li>
                  <li>
                    <CheckCircle2 size={16} /> Mémorisation sécurisée des coordonnées clients
                  </li>
                </ul>
              </div>
              <div className="feature-visual">
                <Image
                  src="/landing/facture-edition.png"
                  alt="Éditeur de facture et devis Exnov"
                  width={850}
                  height={466}
                  unoptimized
                />
              </div>
            </div>

            {/* Bloc 2 */}
            <div className="feature-item reversed">
              <div className="feature-info">
                <span className="feature-badge">Mise en Page Officielle</span>
                <h3 className="feature-title">
                  Aperçu fidèle et pagination intelligente
                </h3>
                <p className="feature-description">
                  Prévisualisez vos factures en temps réel avec le filigrane officiel,
                  l’en-tête or et anthracite et la répartition dynamique des tableaux
                  sur plusieurs pages sans coupure maladroite.
                </p>
                <ul className="feature-checklist">
                  <li>
                    <CheckCircle2 size={16} /> Respect strict de la charte graphique
                  </li>
                  <li>
                    <CheckCircle2 size={16} /> Totaux et mentions bancaires toujours regroupés
                  </li>
                  <li>
                    <CheckCircle2 size={16} /> Typographies Noto Sans et Carlito intégrées
                  </li>
                </ul>
              </div>
              <div className="feature-visual">
                <Image
                  src="/landing/facture-apercu.png"
                  alt="Aperçu avant impression d'une facture Exnov"
                  width={850}
                  height={466}
                  unoptimized
                />
              </div>
            </div>

            {/* Bloc 3 */}
            <div className="feature-item">
              <div className="feature-info">
                <span className="feature-badge">Suivi de Chantiers</span>
                <h3 className="feature-title">
                  Pilotage centralisé de vos projets et intégration Cloud Drive
                </h3>
                <p className="feature-description">
                  Chaque dossier suit un parcours structuré : devis, relevé d’état des
                  lieux, études techniques, CPS &amp; plans, facturation et clôture.
                  Chaque étape valide ses pièces obligatoires avant de progresser.
                </p>
                <ul className="feature-checklist">
                  <li>
                    <CheckCircle2 size={16} /> Stockage et partage automatique via Google Drive
                  </li>
                  <li>
                    <CheckCircle2 size={16} /> Verrouillage anti-conflits entre collaborateurs
                  </li>
                  <li>
                    <CheckCircle2 size={16} /> Historique complet des révisions de documents
                  </li>
                </ul>
              </div>
              <div className="feature-visual">
                <Image
                  src="/landing/espace-projets.png"
                  alt="Espace de suivi de projets et chantiers Exnov"
                  width={850}
                  height={466}
                  unoptimized
                />
              </div>
            </div>

            {/* Bloc 4 */}
            <div className="feature-item reversed">
              <div className="feature-info">
                <span className="feature-badge">Intelligence Artificielle</span>
                <h3 className="feature-title">
                  Génération instantanée de CPS et rapports de visite
                </h3>
                <p className="feature-description">
                  Rédigez des Cahiers des Prescriptions Spéciales (CPS) complets et des
                  rapports techniques de chantier grâce à l’intelligence artificielle
                  spécialisée dans les normes du génie civil.
                </p>
                <ul className="feature-checklist">
                  <li>
                    <CheckCircle2 size={16} /> Clauses administratives et techniques structurées
                  </li>
                  <li>
                    <CheckCircle2 size={16} /> Export Word (.docx) prêt pour les appels d’offres
                  </li>
                  <li>
                    <CheckCircle2 size={16} /> Intégration transparente avec AWS Bedrock &amp; Claude
                  </li>
                </ul>
              </div>
              <div className="feature-visual">
                <Image
                  src="/landing/cps-ia.png"
                  alt="Génération de CPS assistée par IA"
                  width={850}
                  height={466}
                  unoptimized
                />
              </div>
            </div>

            {/* Bloc 5 */}
            <div className="feature-item">
              <div className="feature-info">
                <span className="feature-badge">Conception CAO 2D</span>
                <h3 className="feature-title">
                  Atelier de dessin vectoriel et exports DXF / PDF
                </h3>
                <p className="feature-description">
                  Esquissez et modifiez rapidement vos plans d’étage : murs avec
                  épaisseur, portes et fenêtres dynamiques, cotations automatiques et
                  calcul des surfaces en m².
                </p>
                <ul className="feature-checklist">
                  <li>
                    <CheckCircle2 size={16} /> Export DXF en mètres compatible avec AutoCAD
                  </li>
                  <li>
                    <CheckCircle2 size={16} /> Export PDF à l’échelle avec cartouche officiel EXNOV
                  </li>
                  <li>
                    <CheckCircle2 size={16} /> Assistant IA intégré pour ajuster vos plans en français
                  </li>
                </ul>
              </div>
              <div className="feature-visual">
                <Image
                  src="/landing/plans-2d.png"
                  alt="Atelier Plans 2D avec outil de dessin vectoriel"
                  width={850}
                  height={466}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Section "Pourquoi choisir Exnov ?" */}
        <section className="landing-section" id="advantages">
          <div className="section-header-center">
            <span className="section-pill">
              <ShieldCheck size={12} /> Vos Garanties
            </span>
            <h2 className="section-title">Pourquoi choisir Exnov Workspace ?</h2>
            <p className="section-description">
              Une architecture moderne assurant fiabilité, rapidité et totale
              souveraineté sur vos données d’entreprise.
            </p>
          </div>

          <div className="advantages-grid">
            <div className="advantage-card">
              <span className="advantage-icon">
                <Cpu size={22} />
              </span>
              <h3>Ultra Rapide &amp; Moderne</h3>
              <p>
                Développé sur Next.js 15 avec rendu optimisé. Toutes vos actions
                sont immédiates, sans latence ni rechargement intempestif.
              </p>
            </div>

            <div className="advantage-card">
              <span className="advantage-icon">
                <ShieldCheck size={22} />
              </span>
              <h3>Sécurité &amp; Rôles d’Équipe</h3>
              <p>
                Cloisonnement strict des accès par rôles (Administrateur, Responsable,
                Technicien) avec authentification sécurisée et base de données PostgreSQL.
              </p>
            </div>

            <div className="advantage-card">
              <span className="advantage-icon">
                <Smartphone size={22} />
              </span>
              <h3>100% Adaptatif Mobile &amp; Tablette</h3>
              <p>
                Consultez vos dossiers d’affaires et vérifiez les documents directement
                sur le chantier depuis votre smartphone ou tablette.
              </p>
            </div>

            <div className="advantage-card">
              <span className="advantage-icon">
                <FileText size={22} />
              </span>
              <h3>Normes &amp; Documents Prêts à Signer</h3>
              <p>
                Fini les documents mal cadrés : chaque export respecte les normes
                fiscales marocaines et les standards des bureaux d’études.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Bannière d'Appel à l'Action finale */}
        <aside className="cta-banner" aria-label="Accès à l'espace">
          <div className="cta-banner-content">
            <h2>Prêt à optimiser la gestion de votre bureau d’études ?</h2>
            <p>
              Rejoignez votre espace de travail et gérez vos devis, plans et
              chantiers avec un confort et une rigueur incomparables.
            </p>
          </div>
          <button
            type="button"
            className="cta-banner-btn"
            onClick={onConnectClick}
          >
            Accéder à mon espace <ArrowRight size={16} />
          </button>
        </aside>

        {/* 7. Pied de Page */}
        <footer className="landing-footer-main">
          <div className="landing-footer-top">
            <div className="landing-footer-brand">
              <Image
                src="/logo.png"
                alt="EXNOV"
                width={50}
                height={38}
                unoptimized
              />
              <div>
                <span>BET EXNOV</span>
                <small>Bureau d’études techniques · Génie civil</small>
              </div>
            </div>

            <ul className="landing-footer-links">
              <li>
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontSize: "11.5px",
                    color: "var(--text-muted)",
                    cursor: "pointer",
                  }}
                  onClick={onConnectClick}
                >
                  Espace de connexion
                </button>
              </li>
              <li>
                <a
                  href="#video-demo"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("video-demo");
                  }}
                >
                  Démonstration vidéo
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("features");
                  }}
                >
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a
                  href="#advantages"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("advantages");
                  }}
                >
                  Atouts techniques
                </a>
              </li>
            </ul>
          </div>

          <div className="landing-footer-bottom">
            <span>© 2026 BET EXNOV Workspace. Tous droits réservés.</span>
            <span>Tanger, Maroc · Système d’ingénierie &amp; gestion de projets</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
