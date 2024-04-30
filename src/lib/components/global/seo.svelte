<script lang="ts">
  import { page } from '$app/stores';

  interface Props {
    title?: string;
    titleTemplate?: string;
    titleDefault?: string;
    charset?: string;
    description?: string;
    canonical?: string;
    nofollow?: boolean;
    noindex?: boolean;
    languageAlternates?: {
      href: string;
      hrefLang: string;
    }[];
    openGraph?: {
      basic: {
        title: string;
        type: string;
        image: string;
        url?: string;
      };
      optional?: {
        audio?: string;
        description?: string;
        determiner?: string;
        locale?: string;
        localeAlternate?: string[];
        siteName?: string;
        video?: string;
      };
      image?: {
        url?: string;
        secureUrl?: string;
        type?: string;
        width?: number;
        height?: number;
        alt?: string;
      };
      article?: {
        publishedTime?: string;
        modifiedTime?: string;
        expirationTime?: string;
        authors?: string[];
        section?: string;
        tags?: string[];
      };
    };
    twitter?: {
      card?: 'summary' | 'summary_large_image' | 'app' | 'player';
      site?: string;
      creator?: string;
      title?: string;
      description?: string;
      image?: string;
      imageAlt?: string;
    };
  }

  const { openGraph, twitter, languageAlternates, ...basic }: Props = $props();

  const processTitle = () => {
    if (!basic.title && !basic.titleDefault) {
      throw new Error('You must provide a title or titleDefault');
    }

    if (basic.title && basic.titleTemplate) {
      return basic.titleTemplate.replace(/%s/g, basic.title);
    } else if (basic.titleDefault) {
      return basic.titleDefault;
    }

    return basic.title;
  };
</script>

<svelte:head>
  <title>{processTitle()}</title>
  <link rel="canonical" href={basic.canonical ?? $page.url.href} />

  {#if basic.description}
    <meta name="description" content={basic.description} />
  {/if}

  <meta
    name="robots"
    content={`${basic.noindex ? 'noindex' : 'index'}, ${basic.nofollow ? 'nofollow' : 'follow'}`}
  />

  {#if openGraph}
    <meta property="og:title" content={openGraph.basic.title} />
    <meta property="og:type" content={openGraph.basic.type} />
    <meta property="og:image" content="{$page.url.origin}{openGraph.basic.image}" />
    <meta property="og:url" content={openGraph.basic.url || $page.url.href} />

    <!-- OG Optional -->
    {#if openGraph.optional}
      {#if openGraph.optional.audio}
        <meta property="og:audio" content={openGraph.optional.audio} />
      {/if}
      {#if openGraph.optional.description}
        <meta property="og:description" content={openGraph.optional.description} />
      {/if}
      {#if openGraph.optional.determiner}
        <meta property="og:determiner" content={openGraph.optional.determiner} />
      {/if}
      {#if openGraph.optional.locale}
        <meta property="og:locale" content={openGraph.optional.locale} />
      {/if}
      {#if openGraph.optional.localeAlternate}
        {#each openGraph.optional.localeAlternate as locale}
          <meta property="og:locale:alternate" content={locale} />
        {/each}
      {/if}
      {#if openGraph.optional.siteName}
        <meta property="og:site_name" content={openGraph.optional.siteName} />
      {/if}
      {#if openGraph.optional.video}
        <meta property="og:video" content={openGraph.optional.video} />
      {/if}
    {/if}

    <!-- OG Image -->
    <meta property="og:image:url" content="{$page.url.origin}{openGraph.basic.image}" />
    {#if openGraph.image?.secureUrl}
      <meta
        property="og:image:secure_url"
        content="{$page.url.origin}{openGraph.image.secureUrl}"
      />
    {/if}
    {#if openGraph.image?.type}
      <meta property="og:image:type" content={openGraph.image?.type} />
    {/if}
    {#if openGraph.image?.width}
      <meta property="og:image:width" content={`${openGraph.image.width}`} />
    {/if}
    {#if openGraph.image?.height}
      <meta property="og:image:height" content={`${openGraph.image.height}`} />
    {/if}
    {#if openGraph.image?.alt}
      <meta property="og:image:alt" content={openGraph.image.alt} />
    {/if}

    <!-- OG Article -->
    {#if openGraph.article?.publishedTime}
      <meta property="article:published_time" content={openGraph.article.publishedTime} />
    {/if}
    {#if openGraph.article?.modifiedTime}
      <meta property="article:modified_time" content={openGraph.article.modifiedTime} />
    {/if}
    {#if openGraph.article?.expirationTime}
      <meta property="article:expiration_time" content={openGraph.article.expirationTime} />
    {/if}
    {#if openGraph.article?.authors}
      {#each openGraph.article.authors as author}
        <meta property="article:author" content={author} />
      {/each}
    {/if}
    {#if openGraph.article?.section}
      <meta property="article:section" content={openGraph.article.section} />
    {/if}
    {#if openGraph.article?.tags}
      {#each openGraph.article.tags as tag}
        <meta property="article:tag" content={tag} />
      {/each}
    {/if}
  {/if}

  {#if twitter}
    {#if twitter?.card}
      <meta name="twitter:card" content={twitter.card} />
    {/if}
    {#if twitter?.site}
      <meta name="twitter:site" content={twitter.site} />
    {/if}
    {#if twitter?.title}
      <meta name="twitter:title" content={twitter.title} />
    {/if}
    {#if twitter?.image}
      <meta name="twitter:image" content="{$page.url.origin}{twitter.image}" />
    {/if}
    {#if twitter?.imageAlt}
      <meta name="twitter:image:alt" content={twitter.imageAlt} />
    {/if}
    {#if twitter?.description}
      <meta name="twitter:description" content={twitter.description} />
    {/if}
    {#if twitter?.creator}
      <meta name="twitter:creator" content={twitter.creator} />
    {/if}
  {/if}

  {#if languageAlternates}
    {#each languageAlternates as alternate}
      <link rel="alternate" href={alternate.href} hreflang={alternate.hrefLang} />
    {/each}
  {/if}
</svelte:head>
