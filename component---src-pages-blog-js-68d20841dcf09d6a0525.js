"use strict";(self.webpackChunkanne_website=self.webpackChunkanne_website||[]).push([[7],{7769:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var l=a(7294),s=a(1883),n=a(8678),i=a(8032);var r=e=>l.createElement("div",{className:"card is-flex is-flex-direction-column is-flex-grow-1",key:e.slug},l.createElement("div",{className:"card-image"},l.createElement(s.Link,{to:""+e.slug},l.createElement("figure",{className:"image"},e.image?l.createElement(i.G,{alt:"picture of event",image:e.image}):l.createElement("div",{className:"image-replacer"},"Blog Post ",e.index)))),l.createElement("div",{className:"card-content is-flex is-flex-direction-column is-flex-grow-1"},l.createElement("div",{className:"media is-flex-grow-1"},l.createElement("div",{className:"media-content"},l.createElement("p",{className:"title is-4 has-text-left"},e.title||"New Blog Entry"," "),l.createElement("p",{className:"subtitle is-6"}," by ",e.author))),l.createElement("div",{className:"content"},l.createElement("div",{className:"blog-card-text",dangerouslySetInnerHTML:{__html:e.html}})),l.createElement("div",{className:"card-footer p-2 has-text-centered is-align-self-center"},l.createElement(s.Link,{to:e.slug+"/#header",className:"has-text-link has-text-weight-bold"},"Read More"))));var m=()=>{const e=(0,s.useStaticQuery)("3272765713");return l.createElement(n.Z,{name:"Blog",image:e.file.childImageSharp.gatsbyImageData},l.createElement("section",{className:"section"},l.createElement("div",{className:"columns is-multiline"},e.allMarkdownRemark.nodes.map(((t,a)=>{var s;return l.createElement("div",{className:"column is-one-third is-one-third-tabled is-full-mobile is-flex",key:t.id},l.createElement(r,{title:t.frontmatter.title,author:t.frontmatter.author,date:t.frontmatter.date,image:null===(s=t.frontmatter.image)||void 0===s?void 0:s.childrenImageSharp[0].gatsbyImageData,html:t.html,slug:t.fields.slug,index:e.allMarkdownRemark.nodes.length-a}))})))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-68d20841dcf09d6a0525.js.map