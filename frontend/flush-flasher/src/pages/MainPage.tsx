import React, { useEffect, useState } from "react";
import "../assets/css/strongman.css";
import slideImage1 from "../assets/images/firstimage.png";
import image5 from "../assets/images/seeds.jpg";
import bag1 from "../assets/images/bag1.png";
import bag2 from "../assets/images/bag2.png";
import bag3 from "../assets/images/bag3.png";
import testimony4 from "../assets/images/testimony4.png";
import profileImage1 from "../assets/images/icon1.png";
import profileImage2 from "../assets/images/icon2.png";
import boosted from "../assets/images/boosted.png";
import blood from "../assets/images/blood.png";
import deeper from "../assets/images/deeper.png";
import star from "../assets/images/star.png";
import packaging from "../assets/images/packaging.png";
import { Card } from "react-bootstrap";
import { FaCaretUp, FaCaretRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const images = [slideImage1];

const MainPage: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const navigate = useNavigate();
  const [openQuestion, setOpenQuestion] = useState<number | null>(null); // Track which question is open

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index); // Toggle the selected question
  };

  const faqData = [
    {
      question: "Can young children use this?",
      answer: "No, it is not for children. It is for adults at 18yrs+.",
    },
    {
      question: "Does This Have Any Side Effects?",
      answer:
        "No side effect at all, it is made from natural roots and has zero side effect…",
    },
    {
      question: "Why do you sell at these prices?",
      answer:
        "Because we wish to make it affordable for everyone. After this season, you may not get it at this price again…",
    },
    {
      question: "When would I start seeing changes?",
      answer: "Changes begin immediately within the first 48hrs.",
    },
  ];

  useEffect(() => {
    const slides = document.getElementsByClassName("slide");
    const totalSlides = slides.length;

    for (let i = 0; i < totalSlides; i++) {
      slides[i].setAttribute("style", "display: none;");
    }

    if (slideIndex > totalSlides) {
      setSlideIndex(1);
    } else if (slideIndex < 1) {
      setSlideIndex(totalSlides);
    }

    slides[slideIndex - 1].setAttribute("style", "display: block;");
  }, [slideIndex]);

  const changeSlide = (n: number) => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + n;
      const totalSlides = images.length;
      if (newIndex > totalSlides) return 1;
      if (newIndex < 1) return totalSlides;
      return newIndex;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeSlide(1);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.getElementsByTagName("head")[0].appendChild(meta);
    return () => {
      document.getElementsByTagName("head")[0].removeChild(meta);
    };
  }, []);

  const handlePackage = (_package: number) => {
    if (_package === 0) {
      navigate(`/iwant`);
      return null;
    }
    navigate(`/iwant?package=${_package}`);
  };
  return (
    <>
      <div id="first-div">
        <h1>Flush flasher +</h1>
        <h4>(ALL NATURAL BROAD-SPECTRUM ANTIBIOTIC)</h4>
        <div className="slideshow-container">
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Image${index + 1}`} id="slide-image" />
            </div>
          ))}
          <a className="prev" onClick={() => changeSlide(-1)}>
            &#10094;
          </a>
          <a className="next" onClick={() => changeSlide(1)}>
            &#10095;
          </a>
        </div>
      </div>

      <div id="second-div">
        {/* <p className="para1">
          Just before you continue, here is a feedback from customers who bought
          through our social media handle...
        </p>
        <img src={image4} alt="image4" />
        <br />
        <p>
          HERE IS THE ONLY 60 SECONDS EXERCISE THAT YOU NEED TO EXPERIENCE A
          TRIPPLE TREAT PERFORMANCE, AND LAST UP TO 1 HOUR IN THE BEDROOM AND
          BEYOND...
        </p> */}
        <p className="para3">
          Imagine harnessing the pure, unbridled power of nature to fend off a
          staggering variety of harmful bacteria – that’s exactly what an
          all-natural broad-spectrum antibiotic offers. Derived from carefully
          selected plant extracts, it’s brimming with bioactive compounds used
          in herbal medicine for centuries and now validated by modern science.
          From fighting stubborn staph infections to quelling resistant strains
          of E. coli, this botanical marvel delivers reliable antimicrobial
          action without collateral damage to your gut flora or the looming
          threat of antibiotic resistance. Its spectrum spans both gram-positive
          and gram-negative organisms, meaning you can trust it as your first
          line of defense whether you’re facing a nagging sinus infection or a
          sudden urinary tract flare-up. And because it’s all-natural, you
          sidestep the cocktail of synthetic chemicals and harsh side effects
          that conventional antibiotics often bring. In a world where antibiotic
          resistance looms large, embracing this green guardian isn’t just
          smart—it’s truly revolutionary, forward-thinking healthcare that
          invites you to laugh in the face of superbugs while supporting your
          body’s innate healing rhythms.
        </p>
        <div className="testimonies">
          <div className="testimony">
            <img src={profileImage1} alt="Profile1" className="user-pic" />
            <div className="user-info">
              <h3>Mr. Mwas</h3>
              <p>
                I rely on this all-natural broad-spectrum antibiotic because it
                gives me real peace of mind. Knowing it fights a wide range of
                harmful bacteria—without harming my gut or causing side
                effects—makes it my go-to remedy. It’s powerful, yet gentle, and
                completely plant-based. I feel better trusting nature over
                lab-made chemicals. It’s comforting to know I’m protecting my
                health and building resilience naturally, not feeding antibiotic
                resistance.
              </p>
            </div>
          </div>
          <div className="testimony">
            <img src={profileImage2} alt="Profile2" className="user-pic" />
            <div className="user-info">
              <h3>Justin L.</h3>
              <p>
                Ever since I started using this all-natural broad-spectrum
                antibiotic, I’ve noticed a real difference in how quickly I
                recover. It tackles everything from minor infections to more
                stubborn issues, and I love that it does so without messing with
                my digestion or energy levels. I feel empowered using something
                that works with my body, not against it. It’s become an
                essential part of my wellness routine—effective, safe, and
                completely natural.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="third-div">
        <p>
          This all-natural broad-spectrum antibiotic is a powerful example of
          what nature can offer when it comes to effective, holistic healthcare.
          Designed to combat a wide range of harmful bacteria, it stands as a
          safe and intelligent alternative to synthetic antibiotics. What sets
          it apart is its ability to fight both gram-positive and gram-negative
          bacteria, making it a versatile solution for many common
          infections—from respiratory issues to urinary tract infections, and
          more. Unlike traditional antibiotics, which often disrupt the gut
          microbiome and come with a laundry list of side effects, this natural
          remedy works with the body rather than against it. It targets harmful
          pathogens while preserving the body’s beneficial bacteria, supporting
          immune function and digestive balance. Users often report faster
          recovery, fewer side effects, and a stronger sense of overall wellness
          compared to conventional treatments. Crafted entirely from plant-based
          ingredients, this antibiotic draws its power from time-tested herbs
          and botanicals known for their antimicrobial, anti-inflammatory, and
          immune-boosting properties. These natural components have been used in
          various cultures for centuries and are now backed by growing
          scientific evidence. The formula is free of synthetic chemicals,
          artificial preservatives, and harmful additives, making it a trusted
          option for those seeking a cleaner, safer way to manage infections.
          Health-conscious individuals are increasingly turning to this natural
          antibiotic as a preventive measure and first-response solution. It has
          become a staple in households that value natural remedies and
          proactive health management. The convenience of having a single
          product that can handle multiple types of bacterial threats makes it
          both practical and economical. In a world where antibiotic resistance
          is rising at an alarming rate, this all-natural alternative offers a
          sustainable, responsible choice that aligns with long-term health
          goals. Doctors, herbalists, and naturopaths alike are beginning to
          recognize the value of integrating such treatments into broader
          wellness plans. While it is not a replacement for emergency care or
          necessary prescriptions in extreme cases, it provides an effective
          option for mild to moderate infections and as a supportive treatment
          alongside conventional medicine when needed. The praise this product
          receives is not just for its performance but also for its philosophy.
          It embodies a forward-thinking approach to medicine—one that respects
          the complexity of the human body and the healing potential of nature.
          Users appreciate not only the physical benefits but also the peace of
          mind that comes with using a product that is aligned with their values
          and lifestyle. In a healthcare landscape increasingly dominated by
          overprescription and reactive treatment, this all-natural
          broad-spectrum antibiotic is a breath of fresh air. It proves that
          strong, effective medicine doesn’t have to come with harsh
          consequences. Instead, it can be gentle, smart, and rooted in nature’s
          wisdom—offering real results and lasting wellness.
        </p>
      </div>

      <div id="fourth-div">
        <img src={packaging} alt="Image4" className="left" />
        <img src={testimony4} alt="testimony4" className="right" />
      </div>

      <div id="fifth-div">
        <h1>MAXIMIZE MALE HEALTH WHERE IT MATTERS MOST</h1>
        <div className="fifth-columns">
          <div className="column5">
            <img src={boosted} alt="Boosted" />
            <h4>BOOSTED T LEVELS</h4>
            <p>
              Its adaptogenic herbs help regulate hormones and support endocrine
              function, naturally promoting balanced testosterone levels for
              improved strength, vitality, and overall male wellness without
              synthetic intervention.
            </p>
          </div>
          <div className="column5">
            <img src={blood} alt="Blood" />
            <h4>SUPERCHARGED BLOOD FLOW</h4>
            <p>
              This natural antibiotic promotes healthy circulation by reducing
              inflammation and supporting vascular function, ensuring oxygen and
              nutrients are efficiently delivered throughout the body for
              optimal performance.
            </p>
          </div>
          <div className="column5">
            <img src={deeper} alt="Deeper" />
            <h4>DEEPER SLEEP</h4>
            <p>
              By easing internal stress and balancing the body’s systems, it
              encourages deeper, more restorative sleep—helping the body repair
              overnight and wake up refreshed and energized.
            </p>
          </div>
        </div>
      </div>

      <div id="sixth-div">
        <img src={image5} alt="Image5" />
      </div>

      <div id="seventh-div">
        <img src={slideImage1} alt="Image7" />
        <div className="content">
          <h3>Enhance Blood Flow</h3>
          <p>
            <b>
              This natural antibiotic promotes healthy circulation by reducing
              inflammation and supporting vascular function, ensuring oxygen and
              nutrients are efficiently delivered throughout the body for
              optimal performance.
            </b>
          </p>
          <ul className="list7">
            <li>Cures Syphilis</li>
            <li>Cures Pungent Vaginal Smell</li>
            <li>Cures Ecoli</li>
          </ul>
        </div>
      </div>

      <div id="ninth-div">
        <div className="ninth-content">
          <img
            src={deeper}
            alt="Include your imge here"
            className="ninth-image"
          />
          <div className="ninth-text">
            <h4>Maximum Rest</h4>
            <p>
              Maximizes the quality and quantity of your sleep — you’ll sleep
              deeper and better while priming your body to accelerate the
              fat-burning process.
            </p>
            <ul className="ninth-ul">
              <li>Sleep Deeper and Longer</li>
              <li>Boost Metabolism</li>
              <li>Enhance Overnight Muscle Recovery</li>
              <li>Naturally Relieve Stress</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div id="tenth-div">
          <h3 className="consistency">CONSISTENCY IS KEY!</h3>
          <p className="consistency">
            We recommend taking The stack for at least, 7 Days to see the same
            results as the participants in the study above...
          </p>
          <div className="first-row">
            <img src={image4} alt="whatsApp img" className="whatsApp" />
            <p className="text">
              Although the products in this pack get to work right away to
              stimulate healthy testosterone production and improve male vitality,
              the results keep getting better and better with consistent use.
            </p>
          </div>
        </div> */}
      <div className="coffee-div">
        <h2>HERE IS WHY THIS IS THE BEST SOLUTION...</h2>
      </div>
      <div id="four-column-stars">
        <div className="column">
          <img src={star} alt="star" />
          <h3>Made From Natural Ingredients</h3>
          <p>
            Unlike other similar product that are made with harmful chemicals,
            this product is made from some rare natural herbs which makes it the safest
            product out there without any side effects.
          </p>
        </div>
        <div className="column">
          <img src={star} alt="star" />
          <h3>Long-Lasting Result</h3>
          <p>
            This product offers permanent solution and not temporary. Other
            similar products will continue to drain your money every month, but
            when you buy this product, it solves all the brouhaha once and for
            all: even the enlargement is permanent...
          </p>
        </div>
        <div className="column">
          <img src={star} alt="star" />
          <h3>Fast Results Within 7 Days</h3>
          <p>
            You will not have to wait for 30days to see result. You will start
            seeing result as fast as the same day of using Man Power Herbal Tea
          </p>
        </div>
        <div className="column">
          <img src={star} alt="star" />
          <h3>Works for All Conditions Dysfunction Wahala</h3>
          <p>
            This Herbal Cure revives the sleeping little man under no matter how
            long it has been sleeping, puts you in the mood everytime and boost
            energy.{" "}
          </p>
        </div>
      </div>

      <div id="eleventh-div">
        <h1>
          DO YOU WANT TO START ENJOYING ROCK-HARD SATISFACTION & POWER-SURGING
          PERFORMANCE? THEN GET ANY OF OUR PACKAGES!
        </h1>

        <div id="package-columns">
          <Card className="package">
            <Card.Header>
              <Card.Title>
                <h2>Basic Package</h2>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <p>1 Pack of the Flush flasher</p>
              <img src={bag1} alt="Basic Package" />
              <p className="price">2500 KES ONLY</p>
              <button className="package-btn" onClick={() => handlePackage(1)}>
                👍 CLICK TO ORDER
              </button>
            </Card.Body>
          </Card>
          <Card className="package">
            <Card.Header>
              <Card.Title>
                <h2>Premium Package</h2>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <p>2 Packs of the Flush flasher</p>
              <img src={bag2} alt="Premium Package" />
              <p className="price">4000 KES ONLY</p>
              <button className="package-btn" onClick={() => handlePackage(2)}>
                👍 CLICK TO ORDER
              </button>
            </Card.Body>
          </Card>
          <Card className="package">
            <Card.Header>
              <Card.Title>
                <h2>Advanced Package</h2>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <p>3 Packs of the Flush flasher</p>
              {/* <img src={bag3} alt="Advanced Package" /> */}
              <Card.Img src={bag3} alt="Advanced Package" />
              <p className="price">5499 KES ONLY</p>
              <button className="package-btn" onClick={() => handlePackage(3)}>
                👍 CLICK TO ORDER
              </button>
            </Card.Body>
          </Card>
        </div>
        <h3>What If This Doesn't Work For You?</h3>
        <p>
          We understand how difficult it is for you to buy items online but
          based on feedbacks from over 1,455 people, this product works.
        </p>
        <p>
          But just to show you how confident we are in our product and how
          committed we are to your health, here is our “No Bullshit” Guarantee…
        </p>
      </div>

      <div id="twelveth-div">
        <h2>5000</h2>
        <p>Purchases</p>
      </div>

      {/* <div id="guarantee-div">
        <img src={guarantee} alt="Guarantee Image" />
        <header>Here's Our 'Unconditional' 30-Days Guarantee!</header>
        <p>
          For 30 days, you can get a full refund if you’re not 100% satisfied
          with the potent, hard-rock erections you’ll be enjoying. Heck, you can
          get every cent back even if you change your mind and decide you want
          to become a reverend father.
        </p>
        <p>
          You get your hard erections back for good or you pay nothing. I’m
          pretty sure big pharma don’t offer a refund or a trial period when
          they give you a migraine and heart palpitations with their pills – I’m
          pretty sure they keep every shilling in their pockets, even when their
          pills do nothing for you.
        </p>
        <p>
          Test drive this hardening coffee for a full 1 month and if you don't
          get results, we will refund you without terms and conditions.
        </p>
      </div> */}

      <div id="faq-questions">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleQuestion(index)}
              role="button"
              aria-expanded={openQuestion === index}
            >
              <span className="faq-toggle-icon">
                {openQuestion === index ? <FaCaretUp /> : <FaCaretRight />}
              </span>
              <span>{faq.question}</span>
            </div>
            {openQuestion === index && <p className="faq-ans">{faq.answer}</p>}
            <hr />
            <div className="spacer"></div>
          </div>
        ))}
      </div>

      <div id="third-last-div">
        <h1>
          THIS ALL-NATURAL BROAD-SPECTRUM ANTIBIOTIC DELIVERS UNRIVALED POWER AGAINST BACTERIA, SUPPORTS WELLNESS, AND PROMOTES FAST, GENTLE, SUSTAINABLE HEALING.
        </h1>
        <p>Order today and Enjoy FREE DELIVERY</p>
      </div>

      <div id="second-last-div">
        <h2>Note</h2>
        <h4>
          PLEASE, WE ASK THAT YOU SHOULD NOT ORDER THIS PRODUCT IF YOU WILL NOT
          BE AVAILABLE TO RECEIVE IT OR IF THE MONEY IS NOT AT HAND. PLACE ORDER
          ONLY WHEN YOU ARE FULLY EQUIPPED TO RECEIVE; THANKS...
        </h4>
        <p>
          Kindly Don’t Place An Order If You Would Be Traveling Soon, Or You Are
          Not Financially Ready To Receive The Order In 2 – 5 Days...
        </p>
        <h5>
          We Spend A Lot Of Money & Time Shipping These Items To Different
          Locations Here In Kenya And We Don’t Want A Situation Where Your Order
          Arrives At Your Location & You Are Not Available For Pickup. Because
          Such Situations Have Caused Us Great Losses Lately.
        </h5>
        <p>
          For more inquiries and questions of any kind, feel free to contact us
          and our customer team will respond within 24hrs. You can reach us on:
        </p>
        <h1>+254 768 429340</h1>
      </div>

      <div id="last-div">
        {/* <p>
          The Contents Of This Website, Text, Images, Products Are Sold Or
          Distributed By LUFO VENTURES and Protected Under The KENYA Copyright
          Act Pursuant To Ghana And International Copyright Laws. Copy/Edit/Use
          Of Our Contents Without My Express Written Permission And You WILL Be
          Subject To The Maximum Fine/Penalty Imposed By The Law.
        </p> */}
        <h3>DISCLAIMER</h3>
        <p>
          THIS IS NOT FACEBOOK: This site is not part of the Facebook or
          Facebook Inc. website. In addition, this site is NOT endorsed by
          Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
      </div>

      <div className="static-div">
        Flush flasher
        <div className="click-here">
          <button onClick={() => handlePackage(0)}>👍 CLICK TO ORDER</button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
