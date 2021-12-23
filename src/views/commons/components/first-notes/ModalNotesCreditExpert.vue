<template>
  <b-modal
    id="modal-lg"
    v-model="varShowModal"
    size="lg"
    title="NOTES"
    header-class="b-vue-modal-header"
    modal-class="height-modal"
    content-class="modal-classs-credit-content"
    @hidden="hiddenModal"
  >
    <template #modal-header="{ close }">
      <span />
      <h5 style="text-transform: uppercase">
        NOTES
      </h5>
      <i
        class="fas fa-times-circle text-white"
        style="color: #d0cdc5; font-size: 20px; cursor: pointer"
        @click="close"
      />
    </template>
    <ValidationObserver ref="form">
      <form class="campos-detail-modal">
        <b-row>

          <b-col
            lg="12"
            md="12"
            style="text-align: center"
          >
            <b-row>
              <div
                :class="notas[0].program_id == 1 ? 'col-md-3' : 'col-md-4'"
                style="margin: 0 0 10px"
              >
                <div
                  class="form-group class-coco-inline row"
                  style="margin-top: 0"
                >
                  <div
                    class="
                        class-coco-campo-icon
                        add-coco-class-campo-icon
                        col-md-4
                      "
                  >
                    <span>Program</span>
                  </div>
                  <div class="class-coco-campo-text col-md-8">
                    {{ program }}
                  </div>
                </div>
              </div>
              <div
                :class="notas[0].program_id == 1 ? 'col-md-3' : 'col-md-4'"
              >
                <div
                  class="form-group class-coco-inline row"
                  style="margin-top: 0"
                >
                  <div
                    class="
                          class-coco-campo-icon
                          add-coco-class-campo-icon
                          col-md-4
                        "
                  >
                    <span>Client</span>
                  </div>
                  <div
                    class="class-coco-campo-text col-md-8"
                    style="
                          max-width: 22ch;
                          display: inline-block;
                          white-space: nowrap;
                          overflow: hidden;
                          text-overflow: ellipsis;
                        "
                  >
                    {{ client_name }}
                  </div>
                </div>
              </div>
              <div
                :class="notas[0].program_id == 1 ? 'col-md-3' : 'col-md-4'"
              >
                <div
                  class="form-group class-coco-inline row"
                  style="margin-top: 0"
                >
                  <div
                    class="
                          class-coco-campo-icon
                          add-coco-class-campo-icon
                          col-md-4
                        "
                  >
                    <span>Source</span>
                  </div>
                  <div
                    class="class-coco-campo-text col-md-8"
                    style="
                          max-width: 22ch;
                          display: inline-block;
                          white-space: nowrap;
                          overflow: hidden;
                          text-overflow: ellipsis;
                        "
                  >
                    {{ sourcesname }}
                  </div>
                </div>
              </div>
              <b-col md="12">
                <div
                  class="form-group class-coco-inline row"
                  style="margin-top: 0"
                >
                  <div
                    class="
                        class-coco-campo-icon
                        add-coco-class-campo-icon
                        col-md-4
                      "
                  >
                    <span>Catcher | Seller</span>
                  </div>
                  <div
                    class="class-coco-campo-text col-md-8"
                    style="text-align: center"
                  >
                    {{ notas[0].captured + " | " + notas[0].seller }}
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col
            md="12"
            lg="12"
            mt="2"
            style="height: 360px; overflow-y: auto"
          >
            <b-row>
              <b-col md="3">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required"
                >
                  <b-form-group label="Type of identification Number">
                    <b-form-radio-group
                      id="radio-Type-of-identification-Number"
                      v-model="formObject.selectItemTypeIdentificationNumber"
                      :options="listTypeIdentificationNumber"
                      :aria-describedby="''"
                      name="radio-options-radio-Type-of-identification-Number"
                      :class="[
                        errors.length == 0 ? '' : ' border-danger',
                      ]"
                    />
                  </b-form-group>
                </ValidationProvider>
              </b-col>
              <b-col md="3">
                <div v-if="dateTypeAgreement">
                  <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                  >
                    <b-form-group label="Type of Agreement">
                      <b-form-radio-group
                        id="radio-Type-of-Agreement"
                        v-model="formObject.selectTypeAgreement"
                        :options="listTypeAgreement"
                        :aria-describedby="''"
                        name="radio-options-radio-Type-of-Agreement"
                        :class="[
                          errors.length == 0 ? '' : 'border-danger',
                        ]"
                      />
                    </b-form-group>
                  </ValidationProvider>
                </div>
              </b-col>
              <b-col md="6">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required"
                >
                  <b-form-group
                    label="Work Status"
                    label-for="Work-Status"
                    label-cols-sm="12"
                    label-align-sm="left"
                  >
                    <b-form-select
                      v-model="formObject.work"
                      :options="listWorkStatus"
                      :class="[
                        errors.length == 0 ? '' : 'border-danger', 'select-icon-none',
                      ]"
                      :disabled="disable"
                    />
                  </b-form-group>
                </ValidationProvider>
              </b-col>
              <b-col md="6">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required"
                >
                  <b-form-group
                    label="Martial Status"
                    label-for="Martial-Status"
                    label-cols-sm="12"
                    label-align-sm="left"
                  >
                    <b-form-select
                      v-model="formObject.martial"
                      :options="listMartialStatus"
                      :class="[
                        errors.length == 0 ? '' : ' border-danger', 'select-icon-none',
                      ]"
                      :disabled="disable"
                    />
                  </b-form-group>
                </ValidationProvider>
              </b-col>

              <b-col md="6">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required"
                >
                  <b-form-group
                    id="input-group-1"
                    label="Contact Schedule"
                    label-for="Contact-Schedule"
                    description=""
                    :disabled="disable"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="formObject.schedule"
                      :class="[
                        errors.length == 0 ? '' : ' border-danger',
                      ]"
                      type="text"
                      placeholder=""
                      :disabled="disable"
                    />
                  </b-form-group>
                </ValidationProvider>
              </b-col>
              <b-col md="6">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required"
                >
                  <b-form-group
                    id="input-group-1"
                    label="Emergency Contact"
                    label-for="Emergency-Contact"
                    description=""
                  >
                    <b-form-input
                      id="input-1"
                      v-model="formObject.emergency"
                      :class="[
                        errors.length == 0 ? '' : ' border-danger',
                      ]"
                      type="text"
                      placeholder=""
                      :disabled="disable"
                    />
                  </b-form-group>
                </ValidationProvider>
              </b-col>
              <b-col md="6">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required"
                >
                  <b-form-group
                    label="Origin Country"
                    label-for="Origin-Country"
                    label-cols-sm="12"
                    label-align-sm="left"
                  >
                    <b-form-select
                      v-model="formObject.country"
                      :options="countrys"
                      :class="[
                        errors.length == 0 ? '' : ' border-danger',
                        'select-icon-none',
                      ]"
                      :disabled="disable"
                      @change="changeCountryCode"
                    />
                  </b-form-group>
                </ValidationProvider>
              </b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col md="12">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required"
                >
                  <b-form-group :label="'Goals'">
                    <b-form-checkbox-group
                      id="checkbox-group-goalds"
                      v-model="formObject.selectGolads"
                      :options="listGoalds"
                      :aria-describedby="''"
                      name="Goals"
                      stacked
                      :class="[
                        errors.length == 0 ? 'p-2' : 'p-2 border-danger',
                      ]"
                    />
                  </b-form-group>
                </ValidationProvider>
              </b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col md="12">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="'required'"
                >
                  <b-form-group
                    class="b-form-group-Pending"
                    :label="'Pending'"
                  >
                    <b-form-checkbox-group
                      id="checkbox-group-Pending"
                      v-model="formObject.selectPending"
                      :options="listPending"
                      :aria-describedby="''"
                      name="Pending"
                      stacked
                      :class="[
                        errors.length == 0 ? '' : ' border-danger',
                      ]"
                    />
                  </b-form-group>
                </ValidationProvider>
              </b-col>
            </b-row>
            <hr>
            <b-row
              v-if="json_noce.length > 0 || created_at > '2021-05-02'"
            >
              <b-col md="12">
                <div
                  class="form-group"
                  style="margin-top: 0px !important"
                >
                  <label>Inconveniences</label>
                  <b-row style="margin: 0 auto">
                    <b-col md="6">
                      <table
                        class="table table-bordered"
                        style="
                            margin: 1rem 0 !important;
                            overflow: hidden;
                            border-radius: 10px;
                            font-size: 11px;
                          "
                      >
                        <thead>
                          <tr
                            style="
                                background: #45c0c8;
                                color: #fff !important;
                                text-transform: uppercase;
                                text-weight: bold;
                              "
                          >
                            <th style="font-weight: 100">
                              Description
                            </th>
                            <th style="font-weight: 100">
                              Task
                            </th>
                            <th style="font-weight: 100">
                              Quantity
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(task, index) in json_noce"
                            v-show="index <= Math.floor(json_noce.length / 2)"
                            :key="task.id"
                            style="background: #f1f1f1"
                          >
                            <th style="font-weight: 100">
                              {{ task.description }}
                            </th>
                            <th style="font-weight: 100">
                              {{ task.task }}
                            </th>
                            <th style="font-weight: 100">
                              {{ task.quantity }}
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </b-col>
                    <b-col md="6">
                      <table
                        class="table table-bordered"
                        style="
                            margin: 1rem 0 !important;
                            overflow: hidden;
                            border-radius: 10px;
                            font-size: 11px;
                          "
                      >
                        <thead>
                          <tr
                            style="
                                background: #45c0c8;
                                color: #fff !important;
                                text-transform: uppercase;
                                text-weight: bold;
                              "
                          >
                            <th style="font-weight: 100">
                              Description
                            </th>
                            <th style="font-weight: 100">
                              Task
                            </th>
                            <th style="font-weight: 100">
                              Quantity
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(task, index) in json_noce"
                            v-show="index > Math.floor(json_noce.length / 2)"
                            :key="task.id"
                            style="background: #f1f1f1"
                          >
                            <th style="font-weight: 100">
                              {{ task.description }}
                            </th>
                            <th style="font-weight: 100">
                              {{ task.task }}
                            </th>
                            <th style="font-weight: 100">
                              {{ task.quantity }}
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
            <hr v-if="created_at > '2021-05-02'">
            <b-row v-if="created_at > '2021-05-02'">
              <b-col md="12">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="'required'"
                >
                  <b-form-group
                    label="Information"
                    label-for="textarea-formatter"
                    description=""
                    class="mb-0"
                  >
                    <b-form-textarea
                      id="textarea-formatter"
                      v-model="formObject.information"
                      :class="[
                        errors.length == 0 ? '' : ' border-danger',
                      ]"
                      placeholder=""
                      :disabled="disable"
                    />
                  </b-form-group>
                </ValidationProvider>
              </b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col md="12">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="'required'"
                >
                  <b-form-group
                    class="b-form-group-Recomendations"
                    :label="'Recomendations'"
                  >
                    <b-form-checkbox-group
                      id="checkbox-group-Recomendations"
                      v-model="formObject.selectRecomendations"
                      :options="listRecomendations"
                      :aria-describedby="''"
                      name="Recomendations"
                      :class="[
                        errors.length == 0 ? '' : ' border-danger',
                      ]"

                      stacked
                    />
                  </b-form-group>
                </ValidationProvider>
              </b-col>

              <b-col md="12">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="requiredReco4Text ? 'required' : ''"
                >
                  <b-form-group
                    label=""
                    label-for="textarea-formatter"
                    description=""
                    class="mb-0"
                  >
                    <b-form-textarea
                      id="textarea-formatter"
                      v-model="formObject.reco4text"
                      :class="[
                        errors.length == 0 ? '' : ' border-danger',
                      ]"
                      placeholder=""
                      :disabled="disable"
                    />
                  </b-form-group>
                </ValidationProvider>
              </b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col md="12">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="'required'"
                >
                  <b-form-group
                    label="Suggestion"
                    label-for="textarea-formatter"
                    description=""
                    class="mb-0"
                  >
                    <b-form-textarea
                      id="textarea-formatter"
                      v-model="formObject.suggestion"
                      :class="[
                        errors.length == 0 ? '' : ' border-danger',
                      ]"
                      placeholder=""
                      :disabled="disable"
                    />
                  </b-form-group>
                </ValidationProvider>
              </b-col>
            </b-row>
            <div v-if="score_json != null">
              <div
                class="form-group"
                style="margin-top: 0px !important"
              >
                <label>Account</label>
                <add-note-cr
                  v-if="score_json != null"
                  :score_id="score_id"
                  :score_json="score_json"
                  :idevent="null"
                  :program="3"
                  :status="2"
                  :validate-route="false"
                  :data_sale="data_sale"
                />
              </div>
            </div>
          </b-col>
        </b-row>
      </form>
    </ValidationObserver>
    <template
      #modal-footer="{}"
      class="footettemplate"
    >
      <div class="footerbtn">
        <b-button
          v-if="showSave && !notSeller"
          class="btn btn-success rounded"
          type="button"
          :disabled="disablebutton.save"
          style="
              background-color: rgb(30, 191, 203);
              font-size: 13px;
              padding: 6px;
              height: 35px;
            "
          @click="saveNotesIncomplete"
        >
          <i class="far fa-save" /> SAVE</b-button>
        <b-button
          v-if="showSave && !notSeller"
          class="btn btn-success btn-color-green ml-2 rounded"
          type="button"
          :disabled="disablebutton.save"
          style="font-size: 13px; padding: 6px; height: 35px; width: 150px"
          @click="saveNotesCompleted"
        >
          <i class="far fa-save" /> SAVE & COMPLETE</b-button>
        <b-button
          v-if="showUpdate && !notSeller"
          class="btn btn-success btn-color-green rounded"
          type="button"
          :disabled="disablebutton.update"
          style="font-size: 13px; padding: 6px; height: 35px"
          @click="updateNotas"
        >
          <i class="far fa-save" /> UPDATE</b-button>
      </div>
    </template>
  </b-modal>

</template>

<script>
export default {
  props: [
    'notesprogram',
    'nameProgram',
    'nameClient',
    'type',
    'editmodal',
    'statusSale',
    'sourcesname',
    'pack',
    'role_id',
    'salemades',
    'score_json',
    'sale_id',
    'score_id',
    'created_at',
    'originCountry',
    'idLead',
    'notSeller',
  ], // Martial Status
  data() {
    return {
      varShowModal: true,
      selectTypeIdentificationNumber: null,
      textGoald: '',
      listMartialStatus: [
        {
          id: '1',
          value: '1',
          text: 'SINGLE',
        },
        {
          id: '2',
          value: '2',
          text: 'MARRIED',
        },
        {
          id: '3',
          value: '3',
          text: 'DIVORCED',
        },
        {
          id: '4',
          value: '4',
          text: 'WIDOWER - WIDOW',
        },
      ],
      listWorkStatus: [
        {
          id: '1',
          value: '1',
          text: 'EMPLOYED',
        },
        {
          id: '2',
          value: '2',
          text: 'SELF EMPLOYED',
        },
        {
          id: '3',
          value: '3',
          text: 'RETIRED',
        },
        {
          id: '4',
          value: '4',
          text: 'STUDENT',
        },
        {
          id: '5',
          value: '5',
          text: 'DISABILITY',
        },
        {
          id: '6',
          value: '6',
          text: 'UNEMPLOYED',
        },
      ],
      formObject: {
        selectItemTypeIdentificationNumber: null,
        selectTypeAgreement: '',
        work: '',
        martial: '',
        schedule: '',
        emergency: '',
        country: 'MX',
        selectGolads: [],
        selectPending: [],
        information: '',
        selectRecomendations: [],
        reco4text: '',
        suggestion: '',
      },
      listTypeIdentificationNumber: [
        {
          id: 'invented',
          value: '1',
          checked: null,
          text: 'CPN',
          disabled: false,
        },
        {
          id: 'itin',
          value: '2',
          checked: null,
          text: 'ITIN',
          disabled: false,
        },
        {
          id: 'ssn',
          value: '3',
          checked: null,
          text: 'SSN',
          disabled: false,
        },
      ],
      selectGolads: [],
      listGoalds: [
        {
          id: 'goal-1',
          value: 'goal-1',
          checked: null,
          text: 'CASA',
        },
        {
          id: 'goal-2',
          value: 'goal-2',
          checked: null,
          text: 'AUTO',
        },
        {
          id: 'goal-3',
          value: 'goal-3',
          checked: null,
          text: 'REFINANCIAR CASA',
        },
        {
          id: 'goal-4',
          value: 'goal-4',
          checked: null,
          text: 'REFINANCIAR AUTO',
        },
        {
          id: 'goal-5',
          value: 'goal-5',
          checked: null,
          text: 'EXCELENTE CREDITO',
        },
      ],
      selectPending: [],
      listPending: [
        {
          id: 'pen-1',
          value: 'pen-1',
          checked: null,
          text: 'ID',
        },
        {
          id: 'pen-2',
          value: 'pen-2',
          checked: null,
          text: 'UB',
        },
        {
          id: 'pen-3',
          value: 'pen-3',
          checked: null,
          text: 'SSN',
        },
        {
          id: 'pen-4',
          value: 'pen-4',
          checked: null,
          text: 'NONE',
        },
      ],

      listRecomendations: [
        {
          id: 'reco-1',
          value: 'reco-1',
          checked: null,
          text: 'AVOID INQUIRES',
        },
        {
          id: 'reco-2',
          value: 'reco-2',
          checked: null,
          text: "ADVISOR'S RECOMMENDATIONS",
        },
        {
          id: 'reco-3',
          value: 'reco-3',
          checked: null,
          text: 'CREDIT CARDS BALANCE',
        },
        {
          id: 'reco-5',
          value: 'reco-5',
          checked: null,
          text: 'COLLECTION LETTERS',
        },
        {
          id: 'reco-4',
          value: 'reco-4',
          checked: null,
          text: 'OTHERS',
        },
      ],
      form: new Form({
        idlead: this.idlead,
        card_expi_month: '',
        card_expi_year: '',
        cardnumber: '',
        cardsecuritycode: '',
        city: '',
        state: '',
        country: 'United Stated',
        zipcode: '',
        address: '',
        cardholdername: '',
        street: '',
        user: this.session,
      }),
      program: this.nameProgram,
      client_name: this.nameClient,
      notas: this.notesprogram,
      salemades: this.salemades,
      disable: false,
      invented: '',
      itin: '',
      ssn: '',
      selectTypeAgreement: '',
      listTypeAgreement: [
        { text: 'Email', value: 'Email', disabled: false },
        { text: 'Ups', value: 'Ups', disabled: false },
        { text: 'Voice', value: 'Voice', disabled: false },
      ],
      work: '',
      martial: '',
      schedule: '',
      emergency: '',
      country: 'MX',
      countrys: [],
      // suggestion: "",
      inconvenience: '',
      information: '',
      recomendations: [],
      goals: [],
      pending: [],
      // reco4text: "",
      errorOther: false,
      ifOther: true,
      json_noce: [],
      showSave: false,
      showUpdate: false,
      showSpan1: false,
      showSpan2: false,
      type: '',
      disablebutton: {
        save: false,
        update: false,
      },
      noteNull: false,
      origin_country: null,
    }
  },
  computed: {
    dateTypeAgreement() {
      return this.created_at > '2021-08-05'
    },
    requiredReco4Text() {
      const isRecord4 = this.formObject.selectRecomendations.filter(val => val == 'reco-4')
      return !!isRecord4.length
    },
  },
  watch: {

    disable(newVal) {
      console.log('disable', newVal)
      if (newVal) {
        this.listTypeIdentificationNumber.forEach(element => {
          element.disabled = true
        })
        this.listGoalds.forEach(element => {
          element.disabled = true
        })
        this.listPending.forEach(element => {
          element.disabled = true
        })

        this.listRecomendations.forEach(element => {
          element.disabled = true
        })
      } else {
        this.listTypeIdentificationNumber.forEach(element => {
          element.disabled = false
        })
        this.listGoalds.forEach(element => {
          element.disabled = false
        })
        this.listPending.forEach(element => {
          element.disabled = false
        })
        this.listRecomendations.forEach(element => {
          element.disabled = false
        })
      }
    },
    selectRecomendations(newVal) {
      const existSelectRecomend = newVal.filter(val => val == 'reco-4')
      if (existSelectRecomend.length == 0) {
        this.formObject.reco4text = ''
      }
    },
    varShowModal(par) {
      if (!par) {
        this.closeModal()
      }
    },
    reco4text(newVal, oldVal) {
      if (newVal == '' || newVal == null) {
        const existRecor = this.formObject.selectRecomendations.filter(value => value != 'reco-4')
        this.formObject.selectRecomendations = existRecor
      } else {
        const existRecor = this.formObject.selectRecomendations.filter(value => value == 'reco-4')
        if (existRecor.length == 0) {
          this.formObject.selectRecomendations.push('reco-4')
        }
      }
      console.log('wath-reco4text', newVal)
    },
  },
  mounted() {
    console.log('this.$validator', this)
    if (this.statusSale == 4 || this.statusSale == 2 || this.notSeller) {
      this.disable = true
    } else {
      this.disable = false
    }
    this.getCountries()
  },
  updated(val) {
    console.log('update cicle', val)
  },
  created() {
    this.getJsonData()
    this.getAnswer()
  },
  beforeDestroy() {},
  methods: {
    hiddenModal() {
    },
    async getCountries() {
      try {
        await amgApi.post('/api/view-countrys', {})
        const tempCountry = []
        const dataCountry = response.data
        dataCountry.forEach(val => {
          // let tempItemCountry=val;
          val.text = val.name
          val.value = val.iso
          val.disabled = false
          tempCountry.push(val)
        })

        this.countrys = tempCountry
        if (this.originCountry != null) {
          this.countrys.forEach(element => {
            if (element.id == this.originCountry) {
              this.formObject.country = element.iso
            }
          })
        }
      } catch (error) {
        console.error(error)
      }
    },
    changeCountryCode() {
      this.countrys.forEach(element => {
        if (element.iso == this.formObject.country) {
          this.origin_country = element.id
        }
      })
    },
    async getJsonData() {
      try {
        const response = await amgApi.post('/api/getjsonnocredit', {
          sale_id: this.sale_id,
        })
        if (response.status === 200) {
          this.json_noce = response.data
        }
      } catch (error) {
        this.showToast('danger', 'top-right', 'Error', 'XIcon', error)
        console.error(error)
      }
    },
    closeModal() {
      this.$emit('close', false)
    },
    async getAnswer() {
      const response = await amgApi.post('/api/getfirstnote', {
        sale_id: this.notesprogram[0].sale_id,
      })
      if (response.status === 200) {
        for (let x = 0; x < response.data.length; x++) {
          if (response.data[x].answer == 'null') {
            this.noteNull = true
            response.data[x].answer = ''
          }
        }

        if (response.data.length != 0 && this.statusSale == 2) {
          this.showSave = false
          this.showUpdate = false
          this.showSpan2 = true
          this.showSpan1 = false
        } else if (
          response.data.length != 0
            && this.statusSale != 4
            && !this.noteNull
        ) {
          this.showUpdate = true
          this.showSpan1 = true
          this.showSpan2 = false
        } else if (response.data.length == 0 || this.noteNull) {
          this.showSave = true
          this.showSpan1 = true
          this.showSpan2 = false
        } else if (
          this.editmodal == true
            || this.statusSale == 4
            || this.statusSale == 2
        ) {
          this.showSave = false
          this.showUpdate = false
          this.showSpan1 = false
          this.showSpan2 = true
        }
        const at = this
        response.data.map(index => {
          if (this.invented == '' && this.itin == '' && this.ssn == '') {
            if (index.question_id == 19) {
              this.formObject.selectItemTypeIdentificationNumber = index.answer
            }
          }
          if (this.formObject.work == '') {
            this.formObject.work = index.question_id == 20 ? index.answer : ''
          }
          if (this.formObject.martial == '') {
            this.formObject.martial = index.question_id == 1056 ? index.answer : ''
          }
          if (this.formObject.schedule == '') {
            this.formObject.schedule = index.question_id == 1057 ? index.answer : ''
          }
          if (this.formObject.emergency == '') {
            this.formObject.emergency = index.question_id == 1058 ? index.answer : ''
          }
          if (this.formObject.country == 'MX') {
            this.formObject.country = index.question_id == 1059 ? index.answer : 'MX'
          }
          if (this.formObject.suggestion == '') {
            this.formObject.suggestion = index.question_id == 26 ? index.answer : ''
          }
          if (this.inconvenience == '') {
            this.inconvenience = index.question_id == 1060 ? index.answer : ''
          }
          if (this.formObject.information == '') {
            this.formObject.information = index.question_id == 1061 ? index.answer : ''
          }
          if (this.formObject.selectTypeAgreement == '') {
            this.formObject.selectTypeAgreement = index.question_id == 1063 ? index.answer : ''
          }

          if (index.question_id == 23) {
            index.answer = index.answer.replace(/\\\\n/g, '<br>')
            const reco = JSON.parse(index.answer.replace(/\\/g, '"'))
            reco.map(indexRecord => {
              if (indexRecord.id == 'reco-4') {
                if (indexRecord.hasOwnProperty('text')) {
                  this.formObject.reco4text = indexRecord.text
                } else {
                  this.formObject.reco4text = ''
                }
              }
              this.formObject.selectRecomendations.push(indexRecord.id)
            })
          }
          if (index.question_id == 24) {
            index.answer = index.answer.replace(/\\\\n/g, '<br>')
            const pen = JSON.parse(index.answer.replace(/\\/g, '"'))
            pen.map(index => {
              this.formObject.selectPending.push(index.id)
            })
          }
          if (index.question_id == 25) {
            index.answer = index.answer.replace(/\\\\n/g, '<br>')
            const goal = JSON.parse(index.answer.replace(/\\/g, '"'))

            goal.map(index => {
              this.formObject.selectGolads.push(index.id)
            })
          }
        })
      }
    },
    async saveNotesCompleted() {
      const success = await this.$refs.form.validate()
      if (!success) {
        return false
      }
      if (this.noteNull) {
        this.disablebutton.save = true
        await this.updateaxios()
        this.disablebutton.save = false
      } else {
        this.disablebutton.save = true
        await this.saveaxios()
        this.disablebutton.save = false
      }
    },
    async saveaxios() {
      try {
        this.notesprogram[0].sale_id
        const dt = []
        const tempGoaldFormat = []
        this.formObject.selectGolads.forEach(element => {
          tempGoaldFormat.push({ id: element })
        })
        const tempListPending = []
        this.formObject.selectPending.forEach(element => {
          tempListPending.push({ id: element })
        })
        const tempListRecomendations = []
        this.formObject.selectRecomendations.forEach(element => {
          if (element != 'reco-4') {
            tempListRecomendations.push({ id: element })
          } else {
            tempListRecomendations.push({ id: element, text: this.formObject.reco4text })
          }
        })
        dt.push(
          {
            number: 19,
            value:
                  this.formObject.selectItemTypeIdentificationNumber == null
                  || this.formObject.selectItemTypeIdentificationNumber == ''
                    ? 0
                    : this.formObject.selectItemTypeIdentificationNumber,
            // this.invented == 1 ? 1 : this.itin == 2 ? 2 : this.ssn == 3 ? 3 : 0,
          },
          { number: 20, value: this.formObject.work },
          { number: 1056, value: this.formObject.martial },
          { number: 1057, value: this.formObject.schedule },
          { number: 1058, value: this.formObject.emergency },
          { number: 1059, value: this.formObject.country },
          {
            number: 23,
            value: JSON.stringify(
              tempListRecomendations,
            ),
          },
          {
            number: 24,
            value:
                  JSON.stringify(tempListPending),
          },
          {
            number: 25,
            value: JSON.stringify(tempGoaldFormat),
          },
          { number: 26, value: this.formObject.suggestion },
          { number: 1060, value: this.inconvenience },
          { number: 1061, value: this.formObject.information },
          {
            number: 1063,
            value: this.dateTypeAgreement ? this.formObject.selectTypeAgreement : 1,
          },
        )
        this.loaderView(true)
        const result = await this.showConfirmSwal()
        if (result.value) {
          const response = await amgApi.post('/insertfirstnote', {
            sale_id: this.notesprogram[0].sale_id,
            note: dt,
            originCountry: this.origin_country,
            idLead: this.idLead,
          })
          if (response.status === 200) {
            this.disablebutton.save = false
            this.loaderView(false)
            await this.showSuccessSwal()
            this.$emit('click', false)
            this.$emit('close', false)
          }
        } else {
          this.disablebutton.update = true
          this.loaderView(false)
        }
      } catch (e) {
        this.disablebutton.update = true
        this.loaderView(false)
        this.showErrorSwal(e)
      }
    },
    async saveNotesIncomplete() {
      await this.$refs.form.reset()
      const existrecord = this.listRecomendations.filter(val => {
        val.checked == true && val.value == 'reco-4'
      })
      if (existrecord.length) {
        this.recomendations.push({
          id: 'reco-4',
          text: this.formObject.reco4text,
        })
      }
      if (this.noteNull) {
        await this.updateaxios()
      } else {
        await this.saveaxios()
      }
    },
    async updateNotas() {
      const success = await this.$refs.form.validate()
      if (!success) {
        return false
      }
      await this.updateaxios()
    },
    async updateaxios() {
      try {
        this.notesprogram[0].sale_id
        const dt = []
        const tempGoaldFormat = []
        this.formObject.selectGolads.forEach(element => {
          tempGoaldFormat.push({ id: element })
        })
        const tempListPending = []
        this.formObject.selectPending.forEach(element => {
          tempListPending.push({ id: element })
        })
        const tempListRecomendations = []
        this.formObject.selectRecomendations.forEach(element => {
          if (element != 'reco-4') {
            tempListRecomendations.push({ id: element })
          } else {
            tempListRecomendations.push({ id: element, text: this.formObject.reco4text })
          }
        })
        dt.push(
          {
            number: 19,
            value:
                  this.formObject.selectItemTypeIdentificationNumber == null
                  || this.formObject.selectItemTypeIdentificationNumber == ''
                    ? 0
                    : this.formObject.selectItemTypeIdentificationNumber,
            /* this.invented == 1 ? 1 : this.itin == 2 ? 2 : this.ssn == 3 ? 3 : 0 */
          },
          { number: 20, value: this.formObject.work },
          { number: 1056, value: this.formObject.martial },
          { number: 1057, value: this.formObject.schedule },
          { number: 1058, value: this.formObject.emergency },
          { number: 1059, value: this.formObject.country },
          {
            number: 23,
            value: JSON.stringify(
              tempListRecomendations,
            ) /* JSON.stringify(this.recomendations) */,
          },
          {
            number: 24,
            value:
                  JSON.stringify(tempListPending) /* JSON.stringify(this.pending) */,
          },
          {
            number: 25,
            value: JSON.stringify(tempGoaldFormat) /* JSON.stringify(this.goals) */,
          },
          { number: 26, value: this.formObject.suggestion },
          { number: 1060, value: this.inconvenience },
          { number: 1061, value: this.formObject.information },
          {
            number: 1063,
            value: this.dateTypeAgreement ? this.formObject.selectTypeAgreement : 1,
          },
        )
        this.loaderView(true)
        const result = this.showConfirmSwal()
        if (result.value) {
          this.disablebutton.update = true
          const response = amgApi.post('/updatefirstnote', {
            sale_id: this.notesprogram[0].sale_id,
            note: dt,
            originCountry: this.origin_country,
            idLead: this.idLead,
          })
          if (response.status === 200) {
            this.disablebutton.update = false
            this.loaderView(false)
            this.showSuccessSwal()
            this.$emit('click', false)
            this.$emit('close', false)
          }
          this.disablebutton.update = false
        } else {
          this.disablebutton.update = false
          this.loaderView(false)
        }
      } catch (error) {
        this.loaderView(false)
        this.disablebutton.update = false
      }
    },
    loaderView(loaderViewParameter) {
      if (loaderViewParameter) {
        this.addPreloader()
      } else {
        this.removePreloader()
      }
    },
  },
}
</script>

<style lang="scss">
.textarea-style {
  border: 1px solid #ccc;
  width: 100%;
  height: 80px;
  border-radius: 15px;
  padding: 5px;
}

.required-text {
  border: 1px solid red !important;
  margin: 0;
}

#nohoverlink:hover {
  color: #fff;
}

#nohoverlink {
  float: left;
  margin-bottom: 8px;
  width: 11rem;
}
</style>

<style scoped>
input[type="radio"] {
  /* remove standard background appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* create custom radiobutton appearance */
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 3px;
  outline: none;
  /* background-color only for content */
  background-clip: content-box;
  border: 1px solid #bbbbbb;
  background-color: #e7e6e7;
  border-radius: 50%;
}

input[type="radio"]:checked {
  background-color: #45c0c8;
  box-shadow: none;
}

input[type="checkbox"] {
  /* remove standard background appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* create custom radiobutton appearance */
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 3px;
  outline: none;
  /* background-color only for content */
  background-clip: content-box;
  border: 1px solid #bbbbbb;
  background-color: #e7e6e7;
  border-radius: 5px;
}

input[type="checkbox"]:checked {
  background-color: #45c0c8;
  box-shadow: none;
}
.input-form {
  background: #f9f9f9 !important;
}

select option {
  color: #676767;
  font-weight: bold;
}
select {
  color: #676767;
  font-weight: bold !important;
}
input.input-form {
  color: #676767;
  font-weight: bold !important;
}
.rowtypeidentificationNumber {
  position: relative;
  left: 13px;
}
.rowdateTypeAgreement {
  position: relative;
  left: 20px;
}
.rowgoalds {
  position: relative;
  left: 26px;
}

.modal-footer {
  text-align: center;
  display: block !important;
  padding-bottom: 32px !important;
}

#modal-lg___BV_modal_content_ {
  padding-bottom: 22px !important;
}
.modal-footer {
  text-align: center;
  display: block !important;
  padding-bottom: 47px !important;
}
.footerbtn {
  display: flex !important;
  justify-content: right !important;
  padding-bottom: 30px;
}
::v-deep #modal-lg {
  top: 0px;
  overflow: hidden;
}
::v-deep .modal-dialog {
  top: 0px;
  margin-top: 0px;
}
::v-deep .bv-no-focus-ring {
  font-weight: bold;
}
#checkbox-group-goalds,
#checkbox-group-Pending,
#checkbox-group-Recomendations {
  display: flex;
  position: relative;
  top: -5px;
}
::v-deep .bv-no-focus-ring{
  font-weight: 700 !important;
    color: black;
}
::v-deep .custom-checkbox{
  margin-right: 10px;
}
::v-deep .border-danger{
    border: 1px solid red;
}
</style>
