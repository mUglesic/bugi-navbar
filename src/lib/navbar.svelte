
<script lang="ts">

    import { onMount } from 'svelte';
  
    import burgerIcon from '../assets/menu-burger.svg';

    export let logo: string = 'https://cdn-icons-png.flaticon.com/512/3973/3973133.png';
    export let menuOptions: {name: string, link: string}[] = [];
  
    let menuOpen: boolean = false;
  
    let timer: number;
    let scrolled: boolean = false;
  
    onMount(() => {

      window.addEventListener('scroll', () => {
        
        if (window.scrollY === 0) {
          scrolled = false;
        }
        else {
          scrolled = true;
        }

      });
  
      window.addEventListener('resize', () => {
  
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        else {
          timer = setTimeout(() => {
            timer = null;
          }, 1000)
        }
  
      });
  
    });
  
  </script>
  
  <div class="w-full fixed top-0">
  
    <nav class="relative w-full h-32 flex shadow-md border-b border-neutral-200 bg-[rgba(255,255,255,0.15)] {scrolled ? 'bg-custom-gradient' : 'backdrop-blur'} items-center justify-around">

      <a class="h-1/2" href="/">
        <img class="h-full" alt="logo" src={logo}>
      </a>
  
      <!-- <div id="menu" class="w-11/12 md:w-3/4 text-lg absolute -z-10 md:z-0 top-0 {menuOpen ? 'top-full' : '-translate-y-[120%]'} {timer ? 'pause-transition' : ''} md:relative md:top-0 md:translate-y-0"> -->
      <div id="menu" class="w-11/12 md:w-3/4 text-lg absolute -z-10 md:z-0 top-full {menuOpen ? 'translate-x-0' : 'translate-x-[120%]'} {timer ? 'pause-transition' : ''} md:relative md:top-0 md:translate-x-0">
        <div class="w-full md:flex justify-around shadow-md md:shadow-none border-x border-neutral-200 md:border-0 bg-[rgba(255,255,255,0.15)] {scrolled ? 'bg-custom-gradient' : 'backdrop-blur'} md:bg-transparent md:backdrop-blur-none">
          {#each menuOptions as opt}
            <div class="p-5 md:p-0 border-b border-neutral-200 md:border-0 bg-gradient-to-r {scrolled ? 'hover:from-neutral-200 hover:to-neutral-300 md:hover:from-transparent md:hover:to-transparent' : 'hover:backdrop-blur-lg hover:md:backdrop-blur-none'}">
              <a class="hover:text-orange-500 md:ml-0" href={opt.link}><span>{opt.name}</span></a>
            </div>
          {/each}
        </div>
      </div>
  
      <button on:click={() => menuOpen = !menuOpen} class="h-1/4 md:hidden">
        <img class="h-full" alt="Menu" src={burgerIcon}>
      </button>
  
    </nav>
  
  </div>

  <div class="mb-48"></div>
  
  <style>

    .bg-custom-gradient {
      background-image: linear-gradient(to right, #f5f5f5, #e5e5e5);
    }
  
    #menu {
      transition-property: top, transform;
      transition-timing-function: ease-in-out;
      transition-duration: 300ms;
    }
  
    .pause-transition {
      transition: none !important;
    }
  
    @media (min-width: 768px) {
      #menu {
        transition: none !important;
      }
    }
  
  </style>