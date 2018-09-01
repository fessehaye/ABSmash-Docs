<template>
    
<div class="payout">
  <div class="payout__form">
    <form>
      <div class="payout__field">
        <label>Entrants</label>
        <div class="payout__input">
          <input type="number" placeholder="" v-model="entrants">
        </div>
      </div>
      
      <div class="payout__field">
        <label>Fees</label>
        <div class="payout__input">
          <input type="number" placeholder="" v-model="fee">
        </div>
      </div>
      
      <div class="payout__field">
        <label>Pot Bonus</label>
        <div class="payout__input">
          <input type="number" placeholder="" v-model="bonus">
        </div>
      </div>
      
      <div class="payout__field">
        <label>Spread</label>
        <div class="payout__select payout__select--fill">
          <select v-model="spread">
            <option value="3">Top 3</option>
            <option value="6">Top 6</option>
            <option value="8">Top 8</option>
            <option value="12">Top 12</option>
            <option value="16">Top 16</option>
          </select>
        </div>
      </div>
      
      <div class="payout__field">
        <input class="payout__check" type="checkbox" v-model="exact">
        <label>Exact Change</label>
      </div>
      
      <div class="payout__field" v-show="!exact">
        <label>Round</label>
        <div class="payout__select payout__select--fill">
          <select v-model="rounded">
            <option value="1">Nearest $1 bill</option>
            <option value="5">Nearest $5 bill</option>
            <option value="10">Nearest $10 bill</option>
          </select>
        </div>
      </div>
      
    </form>
  </div>
  <div class="payout__result">
    <table>
      <thead>
        <tr>
          <th>Placement</th>
          <th style="text-align: center;">Quantity</th>
          <th style="text-align: right;">Percent</th>
          <th style="text-align: right;">Payment</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="place in payout[spread]">
          <td>{{place.placement}}</td>
          <td style="text-align: center;">{{place.quantity}}</td>
          <td >{{place.payment | percent }}</td>
          <td ><b>{{ paySplit(place.payment) | currency }}</b></td>
        </tr>
      </tbody>
    </table>
    
    <ul class="payout__stats">
      <li v-show="lowPay"style="color:#F44336;font-weight:700;">Current Payout is too low, try a different spread</b></li>
      <li>Make sure you double check final amounts!</li>
      <li>Total Pot is <b>{{ pot | currency }}</b></li>
      <li>Money Left Over to distribute <b>{{ leftover() | currency }}</b></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      entrants:40,
      fee:10,
      bonus:0,
      spread:3,
      rounded:1,
      exact:true,
      custom:false,
      lowPay:false,
      payout: {
        3: [
          {placement:"1st",quantity:1,payment:0.5},
          {placement:"2nd",quantity:1,payment:0.3},
          {placement:"3rd",quantity:1,payment:0.2},
        ],
        6:[
          {placement:"1st",quantity:1,payment:0.4},
          {placement:"2nd",quantity:1,payment:0.25},
          {placement:"3rd",quantity:1,payment:0.15},
          {placement:"4th",quantity:1,payment:0.10},
          {placement:"5th",quantity:2,payment:0.05},
        ],
        8:[
          {placement:"1st",quantity:1,payment:0.4},
          {placement:"2nd",quantity:1,payment:0.25},
          {placement:"3rd",quantity:1,payment:0.10},
          {placement:"4th",quantity:1,payment:0.08},
          {placement:"5th",quantity:2,payment:0.06},
          {placement:"7th",quantity:2,payment:0.025},
        ],
        12:[
          {placement:"1st",quantity:1,payment:0.3},
          {placement:"2nd",quantity:1,payment:0.25},
          {placement:"3rd",quantity:1,payment:0.10},
          {placement:"4th",quantity:1,payment:0.08},
          {placement:"5th",quantity:2,payment:0.06},
          {placement:"7th",quantity:2,payment:0.03},
          {placement:"9th",quantity:4,payment:0.01},
        ],
        16:[
          {placement:"1st",quantity:1,payment:0.3},
          {placement:"2nd",quantity:1,payment:0.20},
          {placement:"3rd",quantity:1,payment:0.10},
          {placement:"4th",quantity:1,payment:0.08},
          {placement:"5th",quantity:2,payment:0.06},
          {placement:"7th",quantity:2,payment:0.04},
          {placement:"9th",quantity:4,payment:0.02},
          {placement:"13th",quantity:4,payment:0.01},
        ],
      }
    }
  },
    filters: {
    percent: function (value) {
      return value*100 + "%";
    },
    
    currency: function(value) {
      return "$" + value
    }
  },
  
  computed: {
    pot: function () {
      let base = this.entrants * this.fee;
      return parseInt(base) + parseInt(this.bonus)
    }
    
  },
  
  watch: {
    entrants: function (val) {
      this.lowPay = false;
      this.entrants = val < 1 ? 1 : parseInt(val);
    },
    
    fee: function (val) {
      this.lowPay = false;
      this.fee = val < 0 ? 0 : parseInt(val);
    },
    
    bonus: function (val) {
      this.lowPay = false;
      this.bonus = val < 0 ? 0 : parseInt(val);
    },
    
    spread: function (val) {
      this.lowPay = false;
    }
  },
  
  methods: {
    paySplit: function (cut) {
      let total = (this.pot * cut).toFixed(2);
      if (!this.exact) {
        total = Math.floor(total / this.rounded) * this.rounded;
        total = total.toFixed(2);
      }
      
      if (total < this.fee) {
        this.lowPay = true;
      }
      
      return total;
    },
    
    leftover: function () {
      if (this.exact){
        return 0;
      }
      return this.payout[this.spread].reduce(
        (curr,prev) => {
          let p = (this.pot * prev.payment).toFixed(2);
          let left = p - Math.floor(p / this.rounded) * this.rounded;
          return curr + left 
        },0
      );
    },
    
  }
}
</script>

<style lang="scss" scoped>

$color--blue: #3F51B5;
$color--lightblue: #448AFF;
$color--grey: #EEEEEE;
$color--text: #757575;

* {
  box-sizing:border-box;
}

.payout {
  max-width:500px;
  margin: 1em auto;
  color: $color--text;
  display:flex;
  flex-direction:column;
  align-items:center;
  
  &__form {
    width:100%;
    background:$color--grey;
    padding: 1em;
    border-radius:5px;
  }

  &__result {
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
  }
  
  &__stats {
    li {
      margin-top:0.5em;
      font-size:1.2em;
    }
  }
  
  &__reset {
    color:$color--lightblue;
    padding:0.3em 0.8em;
    border-radius:5px;
    box-shadow:none;
    background:transparent;
    border: 2px solid $color--lightblue;
    font-weight:700;
    transition: 0.3 ease all;
    cursor:pointer;
    
    &:hover {
      background:$color--lightblue;
      color:#fff;
    }
  }
  
  &__field {
    display:flex;
    align-items:center;
    margin: 1em 0;
    
    label {
      flex: 0 0 130px;
      font-weight:700;
      color:$color--lightblue;
    }
  }
  
  &__input:focus-within, &__select:focus-within, .payout__input.payout__input--fill,.payout__select.payout__select--fill {
    opacity:1;
    &:after {
      visibility:visible;
      left: 0%;
      width:100%;
    }
  }
  
  &__check {
    margin-right:0.5em;
  }

  &__input,&__select {
    width:100%;
    color:$color--text;
    box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
    background:#ffffff;
    font-weight:500;
    border-radius:5px;
    position:relative;
    display:flex;
    justify-content:center;
    opacity:0.7;
    transition: 0.3s ease all;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 45%;
      height: 3px;
      width: 10px;
      visibility:hidden;
      background-color:$color--lightblue;
      transition: 0.3s ease all;
      z-index:99;
    }
    
    input,select {
      width:100%;
      position: relative;
      border:none;
      padding:0.5em 0.3em;
      border-radius:5px;
      
      &:focus {
        outline:none;
      }
    }
    
  }
  
  
  table {
    border-collapse: collapse;
    margin: 1rem auto;
    display: block;
    overflow-x: auto;
  }

  tr {
    border-top: 1px solid #dfe2e5;
  }

  td, th {
    border: 1px solid #dfe2e5;
    padding: .6em 0.8em;
  }
  
  td {
    text-align:right;
  }

  tr {
    border-top: 1px solid #dfe2e5;
  }

  tr:nth-child(2n) {
    background-color: #f6f8fa;
  }
  
}

</style>

