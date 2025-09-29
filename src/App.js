import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main_1 from "./components/main/Main_1";
import Card_1 from "./components/main/cards/Card_1";
import Card_2 from "./components/main/cards/Card_2";
import Main_2 from "./components/main/Main_2";
import Main_3 from "./components/main/Main_3";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Main_1 />

      <div className=" flex flex-row justify-center ml-[150px]">
        <Card_1 />
        <Card_2 />
      </div>
      <Main_2 />
      <div className=" bg-white  ">
        <Main_3
          title={"FAQ"}
          title1={"How does the 30-day free trial work?"}
          title3={
            "You can use Pulse absolutely free for 30 days. After 30 days, we will charge the credit card you used when you sign up. If you choose to cancel your account before your trial ends, your card will not be charged."
          }
          title2={
            "If I upgrade an existing account, do I get another free trial?"
          }
          title4={
            " Brand new accounts are the only ones eligible for a 30-day free trial. If you upgrade an existing account, your credit card will be billed the new amount on the date of your next billing cycle."
          }
        />
        <Main_3
          title1={"What is a “Financial Account”?"}
          title2={"Do I have to commit to a long-term contract?"}
          title3={
            "Financial Accounts are a grouping of income and expense items that can be used for tracking or reporting purposes. They’re designed to be flexible and can be used to differentiate between bank accounts, companies, individuals or between personal and business entries."
          }
          title4={
            "No. There is no contract when you use Pulse, other than agreeing to our Terms of Service."
          }
        />
        <Main_3
          title1={"Will I be able to cancel my account if I don’t use Pulse?"}
          title2={"What types of payments do you accept?"}
          title3={
            "Yes – you can cancel your account at any time. To cancel your account, go to your billing page and click on “Please cancel my account” at the bottom of the page. The account owner is the only one who can cancel an account. An email request to delete an account is not considered cancellation."
          }
          title4={
            "We accept payments made online using Visa, Mastercard, Discover, and American Express."
          }
        />
        <Main_3 />
      </div>

      <Footer />
    </div>
  );
}

export default App;
