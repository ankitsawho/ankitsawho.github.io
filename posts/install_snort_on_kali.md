---
title: "Install snort on Kali"
subtitle: "snort is no longer available in Kali repositories
Here are the steps to install snort on Kali"
date: "Oct 03, 2022"
---

> snort is no longer available in Kali repositories
> Here are the steps to install snort on Kali

-   Backup kali's sources.list

```
mv /etc/apt/sources.list /etc/apt/sources.list.bak
```

-   Remove updates

```
find /var/lib/apt/lists -type f -exec rm {} \;
```

-   Change sources.list content

```
sudo nano /etc/apt/sources.list
```

Paste content given below

<h6>
deb http://archive.ubuntu.com/ubuntu/ focal main restricted universe multiverse<br>
deb-src http://archive.ubuntu.com/ubuntu/ focal main restricted universe multiverse<br>

deb http://archive.ubuntu.com/ubuntu/ focal-updates main restricted universe multiverse<br>
deb-src http://archive.ubuntu.com/ubuntu/ focal-updates main restricted universe multiverse<br>

deb http://archive.ubuntu.com/ubuntu/ focal-security main restricted universe multiverse<br>
deb-src http://archive.ubuntu.com/ubuntu/ focal-security main restricted universe multiverse<br>

deb http://archive.ubuntu.com/ubuntu/ focal-backports main restricted universe multiverse<br>
deb-src http://archive.ubuntu.com/ubuntu/ focal-backports main restricted universe multiverse<br>

deb http://archive.canonical.com/ubuntu focal partner<br>
deb-src http://archive.canonical.com/ubuntu focal partner<br>

</h6>

If you are using kali as a virtual machine then paste this instead
As core Ubuntu repositories do not have the ARM repositories in them

<h6>
deb [arch=arm64] http://ports.ubuntu.com/ubuntu-ports focal main restricted universe multiverse<br>
deb [arch=arm64] http://ports.ubuntu.com/ubuntu-ports focal-updates main restricted universe multiverse<br>
deb [arch=arm64] http://ports.ubuntu.com/ubuntu-ports focal-security main restricted universe multiverse<br>

deb [arch=i386,amd64] http://us.archive.ubuntu.com/ubuntu/ focal main restricted universe multiverse<br>
deb [arch=i386,amd64] http://us.archive.ubuntu.com/ubuntu/ focal-updates main restricted universe multiverse<br>
deb [arch=i386,amd64] http://security.ubuntu.com/ubuntu focal-security main restricted universe multiverse<br>

</h6>

-   Add the specified public keys

```
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 3B4FE6ACC0B21F32
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 871920D1991BC93C
```

-   Update

```
sudo apt update
```

-   Now install snort

```
sudo apt install snort
```
