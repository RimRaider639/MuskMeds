const navbar = () => {
    return `<div id="nav-top">
    <div id="top-left">
        <div id="logo">
            <img src="https://i.ibb.co/PgBWbvX/Screenshot-20221109-142252.pngg" alt="Logo">
        </div>
        <div id="content">
            <div id="meds">MEDICINES</div>
            <div id="lab-tests">
                <div id="lt1">LAB TESTS</div>
                <div class="sub-button" id="lt2">SAFE</div>
            </div>
            <div id="consult">CONSULT DOCTORS</div>
            <div id="covid">COVID-19</div>
            <div id="ayurveda">AYURVEDA</div>
            <div id="care-plan">
                <div id="cp1">CARE PLAN</div>
                <div class="sub-button" id="cp2">SAVE MORE</div>
            </div>
        </div>
    </div>
    <div id="top-right">
        <div id="profiles">
            <div id="login-signup">
                <div id="login">Login</div>
                <span>|</span> 
                <div id="signup">Sign Up</div>
            </div>
            <div id="offers"> Offers</div>
            <div id="cart">
                <img src="https://i.ibb.co/9yB6310/Screenshot-20221109-143339.png" alt="Cart">
            </div>
            <div id="help">Need Help?</div>
        </div>
    </div>
</div>
<div id="nav-mid">
    <div id="mid-left">
        <div id="location-div">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNeZ_PBfpf6b0zVkV2gJvkzeQZQwO1j8V5QxJ38dqUASNUiRt3T0Do23RP1sBmWbFbYRk&usqp=CAU" alt="loc">
            <select name="Select You Country" id="country">
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antartica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo">Congo, the Democratic Republic of the</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                <option value="Croatia">Croatia (Hrvatska)</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="France Metropolitan">France, Metropolitan</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                <option value="Holy See">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran (Islamic Republic of)</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                <option value="Korea">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon" selected="">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau">Macau</option>
                <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia">Micronesia, Federated States of</option>
                <option value="Moldova">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint LUCIA">Saint LUCIA</option>
                <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia (Slovak Republic)</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                <option value="Span">Spain</option>
                <option value="SriLanka">Sri Lanka</option>
                <option value="St. Helena">St. Helena</option>
                <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan, Province of China</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Viet Nam</option>
                <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Serbia">Serbia</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>          
            </select>
            <img src="data:image/jpeg;base64,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" alt="loc">
        </div>
        <div id="search-div">
            <input type="text" placeholder="Search for Medicines and Health Products" id="search">
            <img id="findProd" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaPi-UPlcYVggdodTK1jx3UmRTSQVZZLl2EcMopHBm86L_qyRxbGsbWGIYsM_PPanG6g8&usqp=CAU" alt="lens">
        </div>
    </div>
    <div id="mid-right">
        <div>QUICK BUY! Get 25% off on medicines*</div>
        <div id="quick-order">Quick Order</div>
    </div>
</div>

<div id="nav-bottom">
    <div id="hrcpage" class="dropdown">
        <button class="ddmenu">Health Resource Center <i class="arrow down"></i></button>
        <div id="hrc" class="dropdown-content">
            <a href="allProducts.html">All Diseases</a>
            <a href="medicines.html">All Medicines</a>
            <a href="allProducts.html">Medicines by Therapeutic Class</a>
        </div>
    </div>
    <div id="vnpage" class="dropdown">
        <button class="ddmenu">Vitamins & Nutrition <i class="arrow down"></i></button>
        <div id="vn" class="dropdown-content">
            <a href="allProducts.html">Vitamins & Supplements</a>
            <a href="allProducts.html">Nutritional Drinks</a>
            <a href="allProducts.html">Health Food & Drinks</a>
            <a href="allProducts.html">Protien Supplements</a>
            <a href="allProducts.html">Omega Fish & Oil</a>
            <a href="allProducts.html">Immunity Boosters</a>
            <a href="allProducts.html">Speciality Supplements</a>
            <a href="allProducts.html">Weight Management</a>
        </div>
    </div>
    <div id="diabetes" class="dropdown">
        <div class="ddmenu">Diabetes <i class="arrow down"></i></div>
        <div id="db" class="dropdown-content">
            <a href="allProducts.html">Diabetes Monitoring</a>
            <a href="allProducts.html">Sugar Free</a>
            <a href="allProducts.html">Diebetic Medicines</a>
            <a href="allProducts.html">Sugar Substitutes</a>
            <a href="allProducts.html">Diabetic Diet</a>
            <a href="allProducts.html">Diabetic Foot Health</a>
        </div>
    </div>
    <div id="hdpage"  class="dropdown">
        <div class="ddmenu">Healthcare Devices <i class="arrow down"></i></div>
        <div id="hd" class="dropdown-content">
            <a href="allProducts.html">Top Brands in Healthcare Devices</a>
            <a href="allProducts.html">BP Monitors</a>
            <a href="allProducts.html">Oxygen Concentrators & cans</a>
            <a href="allProducts.html">Thermometers</a>
            <a href="allProducts.html">Weighing Scales</a>
            <a href="allProducts.html">Masks</a>
            <a href="allProducts.html">Body Massager</a>
            <a href="allProducts.html">Diabetes Monitor</a>
            <a href="allProducts.html">Doctor's Corner</a>
        </div>
    </div>
    <div id="pcpage"  class="dropdown">
        <div class="ddmenu">Personal Care <i class="arrow down"></i></div>
        <div id="pc" class="dropdown-content">
            <a href="allProducts.html">Sexual Wellness</a>
            <a href="allProducts.html">Skin Care</a>
            <a href="allProducts.html">Baby Care</a>
            <a href="allProducts.html">Hair Care</a>
            <a href="allProducts.html">Elderly Care</a>
            <a href="allProducts.html">Women Care</a>
            <a href="allProducts.html">Men Care</a>
            <a href="allProducts.html">Oral Care</a>
            <a href="allProducts.html">Pet Care</a>
        </div>
    </div>
    <div id="hcpage"  class="dropdown">
        <div class="ddmenu">Health Conditions <i class="arrow down"></i></div>
        <div id="hc" class="dropdown-content">
            <a href="allProducts.html">Stomach Care</a>
            <a href="allProducts.html">Heart Care</a>
            <a href="allProducts.html">Bone,Joint & Muscle Care</a>
            <a href="allProducts.html">Pain Relief</a>
            <a href="allProducts.html">Eye Care</a>
            <a href="allProducts.html">Ear Care</a>
            <a href="allProducts.html">First Aid</a>
            <a href="allProducts.html">Liver Care</a>
            <a href="allProducts.html">Cold & Cough</a>
            <a href="allProducts.html">Fever</a>
        </div>
    </div>
    <div id="ayurved"  class="dropdown">
        <div class="ddmenu">Ayurveda Products <i class="arrow down"></i></div>
        <div id="ayvd" class="dropdown-content">
            <a href="allProducts.html">Ayurveda Top Brands</a>
            <a href="allProducts.html">Chyawanprash</a>
            <a href="allProducts.html">Popular categories</a>
            <a href="allProducts.html">Top Health Concerns</a>
            <a href="allProducts.html">unani Medicines</a>
        </div>
    </div>
    <div id="hppage"  class="dropdown">
        <div class="ddmenu">Homeopathy <i class="arrow down"></i></div>
        <div id="hp" class="dropdown-content">
            <a href="allProducts.html">Homeopathy Top Brands</a>
            <a href="allProducts.html">Homeopathy Wellness Combos</a>
            <a href="allProducts.html">Homeopathy Popular Categories</a>
            <a href="allProducts.html"> Homeopathy Medicines</a>
        </div>
    </div>
    <div id="featured"  class="dropdown">
        <div class="ddmenu">Featured <i class="arrow down"></i></div>
        <div id="ftd" class="dropdown-content">
            <a href="allProducts.html">Winter Care</a>
            <a href="allProducts.html">Trending Now</a>
            <a href="allProducts.html">Buy More,Save More</a>
            <a href="allProducts.html">Minimum 33% Off</a>
            <a href="allProducts.html">Popular Combo Deals</a>
            <a href="allProducts.html">Top Brands</a>
            <a href="allProducts.html">Deals of the Day</a>
            <a href="allProducts.html">Super Savings</a>
        </div>
    </div>
    <div id="cepage"  class="dropdown">
        <div class="ddmenu">Covid Essentials <i class="arrow down"></i></div>
        <div id="ce" class="dropdown-content">
            <a href="allProducts.html">Covid-19 Self test Kits</a>
            <a href="allProducts.html">Masks</a>
            <a href="allProducts.html">Sanitizers</a>
            <a href="allProducts.html">Support Your Immunity</a>
            <a href="allProducts.html">Thermometer</a>
            <a href="allProducts.html">Chyawanprash</a>
            <a href="allProducts.html">Oxygen Cans & Concentrators</a>
        </div>
    </div>
</div>`;
};
export { navbar };

