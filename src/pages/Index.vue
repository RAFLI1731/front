<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-table
        title="Data Sensor"
        dense
        :rows="data"
        :columns="columns"
        row-key="name"
      >
      <template>
        <q-tr :props="props">
          <q-td key="adc" :props="props">
            {{ props.row.adc }}
          </q-td>
          <q-td key="keterangan" :props="props">
            {{ props.row.keterangan }}
          </q-td>
        </q-tr>
      </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      columns: [
        { name: 'adc', align: 'left', label: 'Nilai ADC', field: 'adc', sortable: true },
        { name: 'keterangan', align: 'left', label: 'Keterangan', field: 'keterangan', sortable: true }
      ],
      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('user/getaluser')
        .then(res => {
          if (res.data.sukses) {
            this.$q.notify({ message: res.data.pesan, color: 'positive' })
            this.data = res.data.data
          } else {
            this.$q.notify({ message: res.data.pesan, color: 'negative' })
          }
        })
    }
  }
})
</script>
