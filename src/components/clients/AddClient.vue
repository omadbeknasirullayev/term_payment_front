<script setup lang="ts">
</script>

<template>
  <div class="content_container">
    <p class="add-client-title">Client qo'shish</p>

    <form action="#" method="POST">
      <div class="add-client-inputs">
        <label for="seriya" class="add-client-label">
          <span>Mijoz pasport seriyasi</span>
          <input
            type="text"
            name="seriya"
            id="seriya"
            placeholder="Passport seriya va raqami"
            required
          />
        </label>

        <label for="client_name" class="add-client-label">
          <span>Mijoz ismi</span>
          <input type="text" name="client_name" id="client_name" placeholder="Mijoz ismi" required />
        </label>

        <label for="client_phone" class="add-client-label">
          <span>Mijoz telefon raqami</span>
          <input
            type="tel"
            name="client_phone"
            id="client_phone"
            placeholder="Mijoz telefon raqami"
            required
          />
        </label>

        <label for="client_address" class="add-client-label">
          <span>Mijoz manzili</span>
          <input
            type="tel"
            name="client_phone"
            id="client_phone"
            placeholder="Mijoz telefon raqami"
            required
          />
        </label>
        <button type="submit" class="add-client-btn">Qo'shish</button>
      </div>
    </form>
  </div>
</template>



<style scoped>
.content_container {
}

.add-client-title {
  color: #0061f7;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
}

.add-client-inputs {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  font-size: 20px;
}

.add-client-label {
  margin-top: 1rem;
  margin-right: 5rem;
  display: flex;
  flex-flow: column;
}

.add-client-label:nth-child(3) {
  margin-right: 0;
}

.add-client-label span {
  margin-bottom: 0.5rem;
}

.add-client-label input {
  width: 320px;
  height: 2rem;
  line-height: 1rem;
  border-radius: 4px;
  border: 1px solid #0061f7;
  outline: #0061f7;
}

.add-client-btn {
  margin-top: 2.5rem;
  width: 300px;
  line-height: 1rem;
  height: 2.5rem;
  color: #fff;
  font-weight: bold;
  background-color: #0061f7;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
</style>