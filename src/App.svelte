<script lang="ts">

  import Navbar from './lib/navbar.svelte';

  const navbarOptions = [{name: 'DOMOV', link: '#top'}, {name: 'O NAS', link: '#top'}, {name: 'KONTAKT', link: '#top'}, {name: 'KONTAKT', link: '#top'}, {name: 'KONTAKT', link: '#top'}];

</script>

<div class="h-[120vh] flex flex-col place-items-center">

  <img class="h-96 absolute top-0 right-0" alt="N" src="/LetterN.png">

  <Navbar menuOptions={navbarOptions} />

  <div class="w-96 h-96 bg-green-700 border-2 border-black flex place-items-center justify-center">
    <div class="w-48 h-48 bg-red-600 border-2 border-white flex place-items-center justify-center">
      <button>test</button>
    </div>
  </div>

</div>