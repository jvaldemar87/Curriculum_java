---
title: "Homelab & Self-Hosted Infrastructure"
description: "On-premises virtualization and a distributed K3s cluster to emulate production architectures."
icon: "devops"
gridSize: "medium"
tags: ["Proxmox VE", "K3s", "Raspberry Pi", "Cloudflare Tunnels", "Zero Trust", "GitOps"]
lang: "en"
order: 4
---

## Proxmox, K3s & Zero Trust

Self-managed lab that emulates production environments:

- **Proxmox VE** managing Debian and Ubuntu Server virtual machines
- Distributed **K3s** cluster across multiple physical nodes, including ARM (Raspberry Pi)
- Secure remote access with **Cloudflare Tunnels** and **Zero Trust** principles, with no public ports exposed
- **GitOps** approach for maintenance, monitoring, and data persistence
