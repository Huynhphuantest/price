<script lang="ts">
    import { beverages } from "$lib/product/beverage";
    let randomPlaceholder = "";
</script>
<nav>
    <h1>Bạn đang tìm gì?</h1>
    <input placeholder={randomPlaceholder}>
</nav>
<main>
    {#each beverages as beverage}
    <button onclick={()=>{
        window.location.href = `/${beverage.name}`;
    }}>
        <article class="product">
            <img class="product-image" src={beverage.image} alt="?">
            <div class="product-meta">
                <h1 class="product-name">{beverage.name}</h1>
                <h3 class="product-type">{beverage.type}</h3>
                <h2 class="product-price">
                    {beverage.price}₫
                    <span class="product-price-unit">/{beverage.unit}</span>
                </h2>
            </div>
          </article>
    </button>
    {/each}
</main>
<style>
    main {
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
        grid-gap: var(--p-xl);
        padding:var(--p-xl);
    }
    .product {
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        background:var(--neutral-50);
        width:100%;
        height:auto;
        padding: var(--p-xxl) var(--p-xxl);
        padding-top: 0;
        overflow: hidden;
        border-radius:var(--br-xl);
        font-size:var(--fs-md);
        color:var(--neutral-900);
    }
    .product-meta {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .product-image {
        width:100%;
        aspect-ratio:1/1;
    }
    .product-name {
        font-size:var(--fs-lg);
    }
    .product-type {
        font-size:var(--fs-bs);
        color: var(--neutral-200);
    }
    .product-price {
        display:flex;
        align-items:baseline;
        font-size:var(--fs-md);
    }
    .product-price-unit {
        font-weight:400;
        font-size:var(--fs-bs);
    }
</style>