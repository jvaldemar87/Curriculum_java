---
title: "Homelab & Infrastructure Autogérée"
description: "Virtualisation on-premise et cluster K3s distribué pour reproduire des architectures de production."
icon: "devops"
gridSize: "medium"
tags: ["Proxmox VE", "K3s", "Raspberry Pi", "Cloudflare Tunnels", "Zero Trust", "GitOps"]
lang: "fr"
order: 4
---

## Proxmox, K3s & Zero Trust

Laboratoire autogéré qui reproduit des environnements de production :

- **Proxmox VE** pour gérer des machines virtuelles Debian et Ubuntu Server
- Cluster **K3s** distribué sur plusieurs nœuds physiques, dont ARM (Raspberry Pi)
- Accès distant sécurisé avec **Cloudflare Tunnels** et les principes **Zero Trust**, sans ports publics exposés
- Approche **GitOps** pour la maintenance, la supervision et la persistance des données
