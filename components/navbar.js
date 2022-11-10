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
            <img src="" alt="loc">
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
            <img src="" alt="loc">
        </div>
        <div id="search-div">
            <input type="text" placeholder="Search for Medicines and Health Products" id="search">
            <img src="" alt="lens">
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
            <a href="allProducts.html">All Medicines</a>
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
            <a href="allProducts.html">Seciality Supplements</a>
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
export {navbar};