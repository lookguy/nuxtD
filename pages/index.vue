<template>
  <ul>
    <li>
      <details>
        <summary>assets放图片，例如: ~/assets/images/bbbox.jpg</summary>
        <img src="~/assets/images/bbbox.jpg" style="width: 100px; height: 100px" alt="bbbox" />
      </details>
    </li>
    <li>
      <details>
        <summary class="zxb">components放组件，例如: ~/components/ComponentA.vue</summary>
        <ComponentA />
      </details>
    </li>
  </ul>
</template>

<style>
@import url('~/assets/css/custom.css');
</style>