
<script lang="ts">

    import { onMount } from 'svelte';
  
    import burgerIcon from '../assets/menu-burger.svg';
  
    export let menuOptions: {name: string, link: string}[] = [];
  
    let menuOpen: boolean = false;
  
    let timer: number;
  
    onMount(() => {
  
      window.addEventListener('resize', () => {
  
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        else {
          timer = setTimeout(() => {
            timer = null;
          }, 200)
        }
  
      });
  
    });
  
  </script>
  
  <div class="w-full fixed flex flex-col items-center gap-32">
  
    <nav class="relative w-full h-32 rounded-b-[50px] shadow-lg flex bg-gradient-to-r from-cyan-300 to-blue-400 items-center justify-around">

      <img class="h-1/2" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/LetterN.svg/640px-LetterN.svg.png">
  
      <div id="menu" class="w-3/4 md:w-1/2 font-bold text-xl absolute -z-10 md:z-0 {menuOpen ? 'top-32' : '-top-56'} {timer ? 'pause-transition' : ''} md:relative md:top-0">
        <div class="w-full md:flex justify-around rounded-b-[25px] bg-gradient-to-r from-cyan-300 to-blue-400 md:from-transparent md:to-transparent">
          {#each menuOptions as opt}
            <div class="p-5 ml-6 md:p-0 md:ml-0">
              <a href={opt.link}>{opt.name}</a>
            </div>
          {/each}
        </div>
      </div>
  
      <button on:click={() => menuOpen = !menuOpen} class="h-1/4 md:hidden">
        <img class="h-full" alt="Menu" src={burgerIcon}>
      </button>
  
    </nav>
  
  </div>

  <div class="mt-48"></div>
  
  <style>
  
    #menu {
      transition: top 150ms ease-in-out;
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