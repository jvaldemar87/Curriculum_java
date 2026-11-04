---
title: "Homelab & Infraestructura Autogestionada"
description: "Virtualización on-premise y clúster K3s distribuido para emular arquitecturas de producción."
icon: "devops"
gridSize: "large"
tags: ["Proxmox VE", "K3s", "Raspberry Pi", "Cloudflare Tunnels", "Zero Trust", "GitOps"]
lang: "es"
order: 3
---

## Proxmox, K3s & Zero Trust

Laboratorio autogestionado que emula entornos de producción:

- **Proxmox VE** administrando máquinas virtuales Debian y Ubuntu Server
- Clúster **K3s** distribuido en múltiples nodos físicos, incluyendo ARM (Raspberry Pi)
- Acceso remoto seguro con **Cloudflare Tunnels** y principios **Zero Trust**, sin exponer puertos públicos
- Enfoque **GitOps** para mantenimiento, monitoreo y persistencia de datos
