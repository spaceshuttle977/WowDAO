import Demandforecast from "@/components/Demandforecast";
import Tabs from "@/components/Tabs";

const Demand = () => {

    return (   
      <div>   
        <div className="container-fluid">
          {/* Page Heading */}
          <h1 className="h5 mb-4 text-gray-800">Inventory Planning by Month</h1>
          <div style={{overflowX: 'auto'}}>
            <table>
              <tbody><tr>
                  <th style={{width: '10%'}} />
                  <th>Dec 2021</th>
                  <th>Jan 2022</th>
                  <th>Feb 2022</th>
                  <th>Mar 2022</th>
                  <th>Apr 2022</th>
                  <th>May 2022</th>
                  <th>June 2022</th>
                  <th>July 2022</th>
                  <th>Aug 2022</th>
                  <th>Sep 2022</th>
                  <th>Oct 2022</th>
                  <th>Nov 2022</th>
                  <th>Dec 2022</th>
                  <th>Jan 2023</th>
                  <th>Feb 2023</th>
                  <th>Mar 2023</th>
                  <th>Apr 2023</th>
                  <th>May 2023</th>
                  <th>June 2023</th>
                  <th>July 2023</th>
                  <th>Aug 2023</th>
                  <th>Sep 2023</th>
                  <th>Oct 2023</th>
                  <th>Nov 2023</th>
                  <th>Dec 2023</th>
                </tr>
                <tr>
                  <td>Actual sales</td>
                  <td>28,560</td>
                  <td>27,528</td>
                  <td>30,360</td>
                  <td>34,534</td>
                  <td>22,431.6</td>
                  <td>24,228</td>
                  <td>18,872.81</td>
                  <td>600</td>
                  <td>5,084</td>
                  <td>13,516</td>
                  <td>31,696</td>
                  <td>25,172</td>
                  <td>24,600</td>
                  <td>31,200</td>
                  <td>36,828</td>
                  <td>31,372</td>
                  <td>36,828</td>
                  <td>18,290</td>
                  <td>,890</td>
                  <td>24,908</td>
                  <td>51,456</td>
                  <td>38,765</td>
                  <td>43,560.7</td>
                  <td>31,234.7</td>
                  <td>25,084</td>
                </tr>
                <tr>
                  <td>Statistical forecast</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>20,270</td>
                  <td>15,940</td>
                  <td>11,453</td>
                  <td>17,867</td>
                  <td>13,456</td>
                  <td>20,270</td>
                  <td>15,699</td>
                  <td>34,908</td>
                  <td>20,900</td>
                  <td>45,078</td>
                  <td>32,090</td>
                  <td>15,678</td>
                </tr>
                <tr>
                  <td>Final forecast override</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>Average sales price</td>
                  <td>14.26</td>
                  <td>14.30</td>
                  <td>16.36</td>
                  <td>14.35</td>
                  <td>14.04</td>
                  <td>14.60</td>
                  <td>13.76</td>
                  <td>14.12</td>
                  <td>14.59</td>
                  <td>14.46</td>
                  <td>13.76</td>
                  <td>14.12</td>
                  <td>14.59</td>
                  <td>14.46</td>
                  <td>18.59</td>
                  <td>18.59</td>
                  <td>14.85</td>
                  <td>14.26</td>
                  <td>14.57</td>
                  <td>14.61</td>
                  <td>14.48</td>
                  <td>13.88</td>
                  <td>13.99</td>
                  <td>14.56</td>
                  <td>15.13</td>
                </tr>
                <tr>
                  <td>Revenue</td>
                  <td>377,232.5</td>
                  <td>209,140.76</td>
                  <td>409,754.41</td>
                  <td>386,530.31</td>
                  <td>443,216.41</td>
                  <td>475,033.45</td>
                  <td>316,831.28</td>
                  <td>353,457.71</td>
                  <td>272,933.68</td>
                  <td>11,154</td>
                  <td>94,511.56</td>
                  <td>200,670.44</td>
                  <td>452,140.63</td>
                  <td>366,763.48</td>
                  <td>359,394</td>
                  <td>433,127.99</td>
                  <td>515,149.31</td>
                  <td>456,725.48</td>
                  <td>409,645.80</td>
                  <td>276,771.10</td>
                  <td>0</td>
                  <td>0</td>
                  <td>92,231.70</td>
                  <td>292,434.70</td>
                  <td>15,564.9</td>
                </tr>
                <tr>
                  <td>On hand</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>41,814</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>Stockout days</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>Project inventory levels</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>64,470</td>
                  <td>26,418</td>
                  <td>67,9960</td>
                  <td>35,114</td>
                  <td>89,430</td>
                  <td>49,554</td>
                  <td>68,876</td>
                  <td>57,132</td>
                  <td>23,182</td>
                  <td>30,430</td>
                  <td>15,846</td>
                  <td>17,482</td>
                </tr>
                <tr>
                  <td>Project days of supply</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>63</td>
                  <td>33</td>
                  <td>62</td>
                  <td>31</td>
                  <td>62</td>
                  <td>31</td>
                  <td>60</td>
                  <td>62</td>
                  <td>31</td>
                  <td>62</td>
                  <td>31</td>
                  <td>60</td>
                </tr>
                <tr>
                  <td>Ordering plan</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>47,720</td>
                  <td>30,310</td>
                  <td>25,070</td>
                  <td>38,860</td>
                  <td>49,260</td>
                  <td>34,120</td>
                  <td>33,620</td>
                  <td>23,540</td>
                  <td>14,110</td>
                  <td>15,840</td>
                  <td>28,800</td>
                  <td>43,710</td>
                </tr>
                <tr>
                  <td>To receive</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>To ship</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
              </tbody></table>
          </div>
          <br />
        </div>
        {/* /.container-fluid */}
        <Tabs />
      </div>
     
      );
}

export default Demand

