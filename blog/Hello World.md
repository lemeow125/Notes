With this first blog post marks the first steps in moving my blogs and guides to [Docusaurus](https://docusaurus.io) from [Bookstack](https://github.com/BookStackApp/BookStack/).

Before this, I had a [DokuWiki](https://www.dokuwiki.org/dokuwiki) instance running off of an OpenWRT device due to budget constraints. ![](_resources/Hello%20World/6f20a26a6097d2d3dce22aee04b184ab_MD5.jpeg)
You'd be surprised at how well it ran on the very same device that served as a my wireless access point and router. PHP is pretty well known for its age given that it can run on anything, even on MIPS-based processors. My Newifi-D2 was no exception to this.

That archaic DokuWiki instance is long gone now. I've briefly made the move to Discord for my snippets and notes during my academic years and have only recently moved to Bookstack. 
![image.png](_resources/Hello%20World/95e994a558dd0d87a876f54253ed803a_MD5.jpeg)

The functionality to export to `.pdf` and .`md` formats was a welcome addition but I found the other features burdensome. While I did see the benefit in sorting by books, shelves, and pages, this didn't click too well for me. I missed the more hands-on approach with markdown from Discord and from `.md` files which at this time I've recently been working with more.

![Bookstack.png](_resources/Hello%20World/e818ec2473d0ce0bdca161182a270413_MD5.jpeg)

During this time, I was also looking to try out [Syncthing](https://github.com/syncthing/syncthing), [Anki](https://apps.ankiweb.net/) and [Obsidian](https://obsidian.md/) (check them out!) for notes and other wanky stuff after being frustrated with managing too reviewer notes.

I've always wanted to unify my workflow, though not without compromising too much on what I'm already used to.

I found [Perlite](https://github.com/secure-77/Perlite)which lets you serve Obsidian notes directly as webpages. 
![](_resources/Hello%20World/ddea1042d8ac39e09e388776ead1c36f_MD5.jpeg)
The setup unfortunately required using wiki links rather regular markdown ones. This meant that my GitHub repository for my Obsidian notes would appear broken from the GitHub and Gitea UI. I didn't really like that. I liked the idea of my notes being accessible wherever the 