<script lang="ts">
    import { beverages } from "$lib/product/beverage";
    import { isCrated, isPacked, isVarianted } from "$lib/product/modifier";
    const product = beverages[1];
    const isProductVarianted = isVarianted(product);
    const isProductPacked = isPacked(product);
    const isProductCrated = isCrated(product);
</script>
{#snippet modifier(icon:string)}
<div class="modifier">
    <div>
        {icon}
    </div>
    <input type="checkbox">
</div>
{/snippet}
<banner>
    <nav>
        <button onclick={() => {
            window.location.href = `../`;
        }} id="go-back">&lt</button>
        <div class="modifier-container">
            {#if isProductVarianted}
                {@render modifier("interests")}
            {/if}
            {#if isProductPacked}
                {@render modifier("toolbar")}
            {/if}
            {#if isProductCrated}
                {@render modifier("package")}
            {/if}
        </div>
        <button class='icon fill'>
            home   
        </button>
    </nav>
    <img src={product.image} alt="?">
</banner>
<main>
    <h1 class="product-name">{product.name}</h1>
    <h2 class="product-price">

        {product.price}₫
        <span class="product-price-unit">/{product.unit}</span>
    </h2>
</main>
<footer>
    <h1>Miêu tả</h1>
    {#if product.description}
        <p>{product.description}</p>
    {:else}
        <p class="no-desc">Sản phẩm vẫn chưa có miêu tả</p>
    {/if}
</footer>

<style>
    :global(html) {
        height:100%;
        overflow: hidden;
        margin:0;
    }
    :global(body) {
        position:relative;
        height:100%;
        width:100%;
    }
    @media (max-width: 575px) {
        banner {
            background:var(--primary-950);
            width:100vw;
            height:35vh;
            border-bottom-right-radius: 50%;
            border-bottom-left-radius: 50%;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-bottom: var(--p-xl);
            padding-top: var(--p-xl);
        }
        nav {
            display:flex;
            align-items: center;
            justify-content: space-between;
            height:calc(var(--fs-lg) * 1.5);
            width:100%;
            padding: 0 var(--p-xl);
        }
        nav > button {
            height:100%;
            aspect-ratio: 1/1;
            padding: var(--p-lg) var(--p-xl);
            display:flex;
            justify-content: center;
            align-items: center;
            font-weight: 900;
            font-size:var(--fs-lg);
            background: var(--primary-50);
            color: var(--primary-950);
            border-radius: var(--br-xl);
        }
        .modifier-container {
            display: flex;
            justify-content: center;
            gap:var(--p-lg);
            width:100%;
            height:100%;
        }
        .modifier {
            position:relative;
            height:100%;
            aspect-ratio: 1/1;
            background:var(--neutral-50);
            border-radius: var(--br-xl);
        }
        .modifier > div {
            width:100%;
            height:100%;
            font-size:var(--fs-lg);
            display:flex;
            align-items: center;
            justify-content: center;
            font-family: "Material Symbols Outlined";
        }
        .modifier:has(input:checked) > div {
            font-family: "Material Symbols Outlined Fill";
        }
        .modifier > input {
            position:absolute;
            top:0;
            left:0;
            opacity:0;
            width:100%;
            height:100%;
        }
        img {
            height:80%;
        }
        main {
            margin-top: auto;
            margin-bottom: auto;
            padding: var(--p-lg) 0;
            display:flex;
            flex-direction:column;
            align-items: center;
            gap:var(--p-xl);
        }
        .product-name {
            font-weight: 900;
            font-size:var(--fs-xxl);
        }
        .product-price {
            display:flex;
            align-items:baseline;
            font-size:var(--fs-xxl);
            background:var(--primary-50);
            padding:var(--p-xl) var(--p-xxxl);
            border-radius: 1000px;
        }
        .product-price-unit {
            font-weight:400;
            font-size:var(--fs-lg);
        }
        footer {
            margin-top:var(--p-xl);
            height:100%;
            max-height:30vh;
            width:100%;
            background:var(--primary-950);
            color:var(--neutral-50);
            padding:var(--p-xl) var(--p-xxl);
            border-top-left-radius: var(--br-xxl);
            border-top-right-radius: var(--br-xxl);
        }
        footer > h1 {
            font-size:var(--fs-lg);
            font-weight: 700;
        }
        footer > p {
            width:100%;
            margin-top:var(--p-sm);
            font-size:var(--fs-md);
        }
        footer > p.no-desc {
            color:var(--neutral-400);
        }
    }
</style>