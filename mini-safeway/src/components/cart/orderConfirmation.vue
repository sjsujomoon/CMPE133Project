<template>
  <v-content>
    <v-container fluid fill-height>
    	<v-layout >
    		<v-flex xs12 sm10>
        		  <v-card flat class= "mb-2">
		            <v-snackbar
		              v-model="snackbar"
		              absolute
		              top
		              right
		              color="success"
		            >
              <span>Registration successful!</span>
              <v-icon dark>check_circle</v-icon>
            </v-snackbar>
            <v-form @submit.prevent="submit" ref="form">
              <v-container grid-list-xl fluid>
   

       <v-layout wrap>
       	<v-flex headline text-xl-center>
      		Order Complete
      	</v-flex>

        <v-flex xs12>
          <span class="title">Products to be Delivered:</span>
        </v-flex>
    <v-expansion-panel-content v-bind:
            <!-- Column Headers -->
            <v-flex xs12>
            <v-list two-line>
              <v-subheader>
                <v-flex xs12> 
                  Items
                </v-flex>
                <v-flex> 
                  Quantity
                </v-flex>
                
              </v-subheader>
              <v-spacer>
              </v-spacer>

              <!-- Product List -->
              <template v-for="(product, i) in products">
                <v-flex
                  :key="i"
                  pa-2 pl-3
                >
                  <v-divider>
                  </v-divider>
                  <!-- Product Row -->
                  <v-list-tile>
                    <!-- Product Image, Name, and Price -->
                    <v-list-tile-avatar>
                      <img v-bind:src="product.imageSrc">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-flex pt-3 pl-4>
                        <v-list-tile-title>
                          {{ product.name }}
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                          {{ product.price }}
                        </v-list-tile-sub-title>
                      </v-flex>
                    </v-list-tile-content>

                    <!-- Quantity Picker -->
                    
                    <div align="justify-right">
                      {{product.quantity}}
                    </div>
                   
                        
                      </v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-flex>
              </template>
            </v-list>
            <v-flex xs12 >
            <span class="title">Total Amount Charged: $ {{ subTotal }}</span>
            </v-flex>
</v-flex>
 </v-expansion-panel-content>
 <v-flex xs12>
                    <span class="title">Thanks for Shopping with MiniSafeway!</span>
                    </v-flex>
  </v-layout>

 </v-container>
             
            </v-form>
          </v-card>
        </v-flex>

      </v-layout>

    </v-container>
   
            </v-list-tile-content>
              
                <div>
             
            </div>
            </v-flex>


          </v-layout>


        </v-container>
          <!-- </v-container> -->
        <!-- </v-flex> -->

        
            </v-list-tile>
          </v-flex>
        </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
  export default {
    destroyed () {
      this.$store.commit('clearCart')
    },
    computed: {
      // Products should be retrieved from the vuex store
      products () {
        return this.$store.getters.getShoppingCart
      },
      // Subtotal calculated as the sum of each product's price times its quantity
      subTotal () {
        var total = 0
        for (var i = this.products.length - 1; i >= 0; i--) {
          total += this.products[i].price * this.products[i].quantity
        }
        // Round to two decimal places
        return total.toFixed(2)
      },
      user () {
        return this.$store.getters.user
      }
    },

    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
    }
  }
</script>



