import{_ as o,c as r,o as i,a,b as e,e as t}from"./app.c4573477.js";const S='{"title":"GitHub Action Templates for Faster CI Setup","description":"","frontmatter":{"title":"GitHub Action Templates for Faster CI Setup","slug":"github-action-templates"},"headers":[{"level":2,"title":"GitHub Action Templates","slug":"github-action-templates"},{"level":3,"title":"release-ghr-vanilla","slug":"release-ghr-vanilla"},{"level":3,"title":"release-ecr-vanilla","slug":"release-ecr-vanilla"},{"level":3,"title":"release-hub-vanilla","slug":"release-hub-vanilla"},{"level":3,"title":"release-ecr-aws","slug":"release-ecr-aws"}],"relativePath":"github-action-templates.md"}',s={},l=a('<p>If your project is on GitHub, GitHub Actions are a great built in way to have an automated Continuous Integration (CI) setup where the configuration is committed to the same repository where your project lives.</p><p>GitHub Actions are also very cost effective thanks to the generous free minutes allowance and additional <strong>3000 /month</strong> minutes with every paid team member.</p><p>To make taking advantage of GitHub Actions with your ServiceStack applications, we&#39;ve created multiple <a href="/mix-tool">mix</a> templates to setup your CI process quickly. Most <a href="/templates-overview">Project Templates</a> provide a build + test step on every commit as well as combinations of Docker image hosting and application deployments focusing on portability.</p><p>Since hosting architectures vary so much, these templates are designed to get you <em>started</em> with a simple setup where you can iterate quickly as you develop application. As hosting requirements change, the deployment GitHub Action workflow <code>yml</code> files can be customized to suit.</p><p>The simple build and test step is available using the <a href="https://gist.github.com/gistlyn/856bd13c38ad388ef6d48d06c32ab395" target="_blank" rel="noopener noreferrer">build</a>, mix template, whilst the <a href="/mix-tool">mix</a> deployment templates uses the naming convention <code>release-{docker image repository}-{hosting configuration}</code>.</p><p>For example, <code>release-ghr-vanilla</code> where <strong>ghr</strong> uses GitHub for the Docker Repository and <code>vanilla</code> for our minimalist deployment that uses SSH and <strong>docker-compose</strong>.</p><h2 id="github-action-templates" tabindex="-1">GitHub Action Templates <a class="header-anchor" href="#github-action-templates" aria-hidden="true">#</a></h2><p>Templates currently available are:</p><table><thead><tr><th>Name</th><th>Docker Repository</th><th>Deployment and Hosting</th></tr></thead><tbody><tr><td><strong>release-ghr-vanilla</strong></td><td>GitHub Container Repository</td><td>SSH + docker-compose</td></tr><tr><td><strong>release-ecr-vanilla</strong></td><td>AWS Elastic Container Repository</td><td>SSH + docker-compose</td></tr><tr><td><strong>release-hub-vanilla</strong></td><td>Docker Hub</td><td>SSH + docker-compose</td></tr><tr><td><strong>release-ecr-aws</strong></td><td>AWS Elastic Container Repository</td><td>AWS ECS without Load Balancer</td></tr></tbody></table><h3 id="release-ghr-vanilla" tabindex="-1">release-ghr-vanilla <a class="header-anchor" href="#release-ghr-vanilla" aria-hidden="true">#</a></h3><p>Using GitHub Container Repository (<a href="http://ghcr.io" target="_blank" rel="noopener noreferrer">ghcr.io</a>) and deploying to a Linux host with <code>docker-compose</code> via SSH, this provides a GitHub centric option for prototyping your application. A <a href="https://docs.servicestack.net/do-github-action-mix-deployment" target="_blank" rel="noopener noreferrer">full tutorial using Digital Ocean as our Linux host provider is available</a> as well as an accompanying video.</p>',11),n=e("iframe",{class:"video-hd",src:"https://www.youtube.com/embed/0PvzcnxlBvc",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""},null,-1),c=a('<p>Also, a <a href="https://github.com/ServiceStack/mix/blob/master/actions/release-ghr-vanilla/.github/workflows/README.md" target="_blank" rel="noopener noreferrer">shorter reference documentation</a> that comes with the template when using <code>mix</code> available that lists the setup as well as the required <a href="https://github.com/ServiceStack/mix/blob/master/actions/release-ghr-vanilla/.github/workflows/README.md#github-repository-setup" target="_blank" rel="noopener noreferrer">GitHub Repository</a> Secrets for configuration.</p><h3 id="release-ecr-vanilla" tabindex="-1">release-ecr-vanilla <a class="header-anchor" href="#release-ecr-vanilla" aria-hidden="true">#</a></h3><p>Using AWS ECR (Elastic Container Repository) and deploying to a Linux host with <code>docker-compose</code> via SSH, this provides a portable simple hosting with AWS ECR for those already in the AWS cloud provider environment.</p><p>Reference for this GitHub Action configuration is provided with the template itself, also <a href="https://github.com/ServiceStack/mix/blob/master/actions/release-ecr-vanilla/.github/workflows/README.md" target="_blank" rel="noopener noreferrer">available here</a> along with the <a href="https://github.com/ServiceStack/mix/blob/master/actions/release-ecr-vanilla/.github/workflows/README.md#github-repository-setup" target="_blank" rel="noopener noreferrer">required Repository Secrets</a>.</p><h3 id="release-hub-vanilla" tabindex="-1">release-hub-vanilla <a class="header-anchor" href="#release-hub-vanilla" aria-hidden="true">#</a></h3><p>Using the original Docker Hub as an Docker image repository and deploying to a Linux host with <code>docker-compose</code> via SSH, this might be more suited to those with existing use of Docker Hub or public application images.</p><p>Reference for this GitHub Action configuration is provided with the template itself, <a href="https://github.com/ServiceStack/mix/blob/master/actions/release-hub-vanilla/.github/workflows/README.md" target="_blank" rel="noopener noreferrer">also available on GitHub</a> here along with the <a href="https://github.com/ServiceStack/mix/blob/master/actions/release-hub-vanilla/.github/workflows/README.md#github-repository-setup" target="_blank" rel="noopener noreferrer">required Repository Secrets</a>.</p><h3 id="release-ecr-aws" tabindex="-1">release-ecr-aws <a class="header-anchor" href="#release-ecr-aws" aria-hidden="true">#</a></h3><p>Using AWS ECR (Elastic Container Repository) and deploying via AWS ECS to a dedicated ECS cluster with a single EC2 instance, this template enables a gateway into using AWS ECS without the regular cost of an Application Load Balancer (ALB). Like the other templates, this uses NGINX proxy with Lets Encrypt companion in place of AWS specific managed services to do the same. This will give you a starting point for your prototype until you have the need for scalability and high availability for your application.</p><p>We have a full tutorial along with a video walk through available, showing from start to finish getting your ServiceStack application created and deploying via GitHub Actions and ECS.</p>',10),h=e("iframe",{class:"video-hd",src:"https://www.youtube.com/embed/Eh4tvLN8i8g",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""},null,-1),p=e("p",null,[t("Reference for this GitHub Action configuration is provided with the template itself, "),e("a",{href:"https://github.com/ServiceStack/mix/blob/master/actions/release-ecr-aws/.github/workflows/README.md",target:"_blank",rel:"noopener noreferrer"},"also available on GitHub"),t(" here along with the "),e("a",{href:"https://github.com/ServiceStack/mix/blob/master/actions/release-ecr-aws/.github/workflows/README.md#github-repository-setup",target:"_blank",rel:"noopener noreferrer"},"required Repository Secrets"),t(".")],-1),d=[l,n,c,h,p];function u(g,m,b,f,v,w){return i(),r("div",null,d)}var _=o(s,[["render",u]]);export{S as __pageData,_ as default};
