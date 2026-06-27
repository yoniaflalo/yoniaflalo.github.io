import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";

export const DATA = {
  name: "Yonathan Aflalo - AI scientist",
  initials: "YA",
  url: "https://yoniaflalo.github.io/",
  location: "Tel Aviv, Israel",
description:
  "Machine Learning Engineer at Meta working on large-scale embedding and ranking models for ads and product monetization. Previously Senior Applied Scientist at Amazon focusing on recommender systems, with earlier research in NAS, vision transformers, and computer vision systems at Alibaba and Samsung. PhD in Electrical Engineering / Computer Science from the Technion.",
  summary: `
I am a Machine Learning Engineer at Meta in Tel Aviv, working on large-scale embedding and ranking models for ads and product monetization systems.

Previously, I was a Senior Applied Scientist at Amazon, where I led recommender system initiatives that improved customer engagement and production ranking performance. I also mentored engineers and PhD interns and contributed to modeling and experimentation strategy.

Before that, I was a Research Scientist at Alibaba, focusing on Neural Architecture Search and Vision Transformers, with publications at ICML and ICLR workshops. At Samsung, I worked on computer vision and image signal processing for mobile imaging systems, including SLAM and optimization pipelines, and co-authored multiple patents.

I hold a PhD in Electrical Engineering / Computer Science from the Technion, where my research focused on spectral geometry and computer vision. I also completed a postdoctoral fellowship at Technion and Tel Aviv University.

My academic work has been published in journals such as PNAS, JMLR, SIAM Imaging Sciences, and IJCV, and has received 850+ citations.

Outside of research, I enjoy music (drummer and composer), rowing, powerlifting, and mathematics tutoring.
`,
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a dm with a direct question on LinkedIn and I'll respond whenever I can. I will ignore all soliciting.",
    },
  },
  skills: [
    { name: "PyTorch", icon: Icons.pytorch },
    { name: "Numpy", icon: Icons.numpy },
    { name: "Python", icon: Python },
    { name: "Latex", icon: Icons.latex }
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    tel: "+972-52-79-57-400",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yoniaflalo",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yonathan-aflalo-63b94215/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Scholar: {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=Qh0sej0AAAAJ&hl=en&authuser=2/",
        icon: Icons.googleScholar,
        navbar: true,
      },
      },
      email: {
        name: "Send Email",
        url: "yonathan@meta.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  
work: [
  {
    company: "Meta",
    href: "https://about.meta.com/",
    badges: ["Machine Learning Engineer"],
    location: "Tel Aviv, Israel",
    title: "Machine Learning Engineer — Monetization",
    logoUrl: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    start: "2026",
    end: undefined,
    description:
      "Training large-scale embedding and ranking models for Meta's advertising and product monetization systems. Focused on foundation embeddings for ads retrieval, catalog understanding, and cross-product recommendation systems across Meta platforms.",
  },
  {
    company: "Amazon",
    href: "https://amazon.com",
    badges: ["Senior Applied Scientist"],
    location: "Tel Aviv, Israel",
    title: "Senior Applied Scientist",
    logoUrl: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    start: "2021",
    end: "2026",
    description:
      "Tech lead on large-scale recommender systems for Amazon retail. Improved repurchase recommendation performance (+20% NDCG@1), led deep learning ranking models, and managed production ML pipelines and experimentation frameworks.",
  },
  {
    company: "Alibaba",
    href: "https://alibaba.com",
    badges: ["Research Scientist"],
    location: "Tel Aviv, Israel",
    title: "Research Scientist",
    logoUrl: "https://www.google.com/s2/favicons?domain=alibaba.com&sz=128",
    start: "2018",
    end: "2021",
    description:
      "Worked on neural architecture search, vision transformers, and model compression. Published SOTA results in NAS and pruning (ICML 2021, ICLR Workshop 2021).",
  },
  {
    company: "Samsung",
    href: "https://samsung.com",
    badges: ["Senior Algorithm Engineer"],
    location: "Tel Aviv, Israel",
    title: "Senior Algorithm Engineer",
    logoUrl: "https://www.google.com/s2/favicons?domain=samsung.com&sz=128",
    start: "2014",
    end: "2018",
    description:
      "Led computer vision R&D for mobile imaging systems. Developed SLAM and bundle adjustment pipelines outperforming classical CERES-based systems. Co-authored 4 patents in computer vision.",
  },
  {
    company: "Police Nationale",
    href: "#",
    badges: ["Engineering Lead"],
    location: "Paris, France",
    title: "Engineering Lead",
    logoUrl: "https://www.google.com/s2/favicons?domain=police-nationale.interieur.gouv.fr&sz=128",
    start: "2006",
    end: "2007",
    description:
      "Led engineering development for internal administrative systems. Managed workflows and data processing systems for operational optimization.",
  },
],
education: [
  {
    school: "Technion – Israel Institute of Technology & Tel Aviv University",
    href: "https://www.technion.ac.il/",
    degree: "Postdoctoral Researcher — Computer Vision & Spectral Methods",
    logoUrl: "https://finance.tau.ac.il/sites/finance.tau.ac.il/files/media_server/graphic-design/TAU%20NEW%20LOGO/Eng_BW.png",
    start: "2013",
    end: "2014",
  },
  {
    school: "Technion – Israel Institute of Technology",
    href: "https://www.technion.ac.il/",
    degree: "Ph.D. in Electrical Engineering / Computer Science",
    logoUrl: "https://marketing.technion.ac.il/wp-content/uploads/Technion-crest.png",
    start: "2009",
    end: "2013",
  },
  {
    school: "École Polytechnique",
    href: "https://www.polytechnique.edu/",
    degree: "M.Sc. in Applied Mathematics",
    logoUrl: "https://www.google.com/s2/favicons?domain=polytechnique.edu&sz=128",
    start: "2006",
    end: "2009",
  },
  {
    school: "Lycée ORT Strasbourg",
    href: "#",
    degree: "Preparatory Studies — Mathematics & Physics",
    logoUrl: "https://www.google.com/s2/favicons?domain=ort-france.fr&sz=128",
    start: "2003",
    end: "2006",
  },
],
} as const;
