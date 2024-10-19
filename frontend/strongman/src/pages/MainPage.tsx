import React, { useEffect, useState } from "react";
import "../assets/css/active.css";
import slideImage1 from "../assets/images/image1.jpeg";
import slideImage2 from "../assets/images/image2.jpeg";
import slideImage3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";
import image5 from "../assets/images/image5.png";
import image7 from "../assets/images/image7.jpeg";
import belt from "../assets/images/belt.jpg";
import bag1 from "../assets/images/bag1.jpg";
import bag2 from "../assets/images/bag2.jpg";
import bag3 from "../assets/images/bag3.jpg";
import testimony4 from "../assets/images/testimony4.png";
import profileImage1 from "../assets/images/profile1.jpeg";
import profileImage2 from "../assets/images/profile2.jpeg";
import boosted from "../assets/images/boosted.png";
import blood from "../assets/images/blood.png";
import deeper from "../assets/images/deeper.png";
import coffee from "../assets/images/coffee.png";
import guarantee from "../assets/images/guarantee.png";

const images = [slideImage1, slideImage2, slideImage3];

const MainPage: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const slides = document.getElementsByClassName("slide");
    const totalSlides = slides.length;

    // Hide all slides
    for (let i = 0; i < totalSlides; i++) {
      slides[i].setAttribute("style", "display: none;");
    }

    // Adjust slide index to wrap around
    if (slideIndex > totalSlides) {
      setSlideIndex(1);
    } else if (slideIndex < 1) {
      setSlideIndex(totalSlides);
    }

    slides[slideIndex - 1].setAttribute("style", "display: block;");
  }, [slideIndex]);

  function changeSlide(n: number) {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + n;
      const totalSlides = images.length; // Use the number of images dynamically

      // Wrap around logic
      if (newIndex > totalSlides) return 1; // Wrap to first
      if (newIndex < 1) return totalSlides; // Wrap to last
      return newIndex;
    });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeSlide(1);
    }, 5000);

    return () => clearInterval(intervalId); // Clear interval on unmount
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

  return (
    <>
      <div id="first-div">
        <h1>STRONGMAN TEA +</h1>
        <h4>(Fertility Booster & Energy Enhancer)</h4>
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
        <p className="para1">
          Just before you continue, here is a feedback from customers who bought
          through our social media handle...
        </p>
        <img src={image4} alt="image4" />
        <br />
        <p>
          HERE IS THE ONLY 60 SECONDS EXERCISE THAT YOU NEED TO EXPERIENCE A
          TRIPPLE TREAT PERFORMANCE, AND LAST UP TO 1 HOUR IN THE BEDROOM AND
          BEYOND...
        </p>
        <p className="para3">
          What defines a real man is not just the amount of money in his bank
          account, but also the ability to satisfy his partner well in bed. Lets
          be honest, A man not being able to meet this obligation can lead to
          problems in the relationship; like losing his respect, self confidence
          and worst off – losing madam to another man. This is why some Asian
          Scientists took upon themselves to find a solution – which led to the
          formulation of this herbal product called the Alpha Coffee to help put
          a permanent end to this issue and help men get back their spark
          inside-out To be honest, this stuff works… No matter how long you have
          been battling with this or how severe it is or how many product you
          have tried in the past. Whether you find it hard to get that early
          morning erection, or always have loss of appetite when its time to do
          or your little man sleep off during or before the match begins, this
          product is the perfect solution.
        </p>

        <div className="testimonies">
          <div className="testimony">
            <img src={profileImage1} alt="Profile1" className="user-pic" />
            <div className="user-info">
              <h3>user name 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                nobis explicabo eum, eveniet a recusandae? Odit eveniet
                distinctio vitae ipsa numquam ratione nobis itaque modi
                doloribus sapiente natus, odio praesentium, laboriosam in,
                recusandae possimus est eligendi nulla minus doloremque et
                rerum! Corrupti consectetur debitis numquam, inventore culpa
                vitae accusantium voluptates omnis, placeat, ratione eius nihil?
                Perspiciatis unde magni inventore ratione fuga vel nam nesciunt,
                adipisci libero debitis exercitationem aliquam pariatur quas,
                eligendi laudantium? Libero nulla, consequuntur, autem dolore
                itaque facere aliquam suscipit, maxime rerum illum reprehenderit
                ipsum possimus harum corrupti. Minus ad, architecto totam fugit
                temporibus nihil nisi suscipit doloribus?
              </p>
            </div>
          </div>
          <div className="testimony">
            <img src={profileImage2} alt="Profile2" className="user-pic" />
            <div className="user-info">
              <h3>username 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias id atque alias dolore quae dolores rem adipisci,
                ratione, eum enim, itaque ipsum delectus reprehenderit? Alias
                repellat dignissimos obcaecati fuga, repudiandae distinctio,
                explicabo deserunt, id quam unde natus! Hic, tempore ipsa dolor
                blanditiis maiores fuga neque odit expedita aliquid sint,
                exercitationem temporibus, veniam cupiditate quaerat. Eius
                maiores dolor sint, voluptates nisi, in minus illum, veniam
                corporis nostrum unde dolore autem laudantium quas eveniet
                temporibus saepe! Repudiandae nostrum nemo odit aspernatur
                dignissimos id, nam sit ipsa nihil fugiat? Qui blanditiis
                doloremque, laudantium quibusdam quae itaque eaque molestias,
                commodi molestiae dolor ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="third-div">
        <p>
          Waking up with the biggest, hardest erection you’ve had in the last 10
          years The alpha male dominant feeling you’ll get when you know you can
          out-perform any other dude around (especially those young guys)
          Watching your wife or girlfriend spasm in ecstasy as she climaxes
          intensely, over and over again, all thanks to you The doting look on
          her face as you catch her admiring you after you’ve given her yet
          another night of endless and mind-blowing passionate sex The amazing
          improvement in your self-worth, your confidence and your family life
          What is it worth to you to feel this manly, confident and sexually
          youthful? To never have to worry again if you’ll get hard tonight or
          that you’ll lose your wood after a few minutes? Picture yourself in a
          few days’ time when you’ve got your super hard, big erection back.
          Other men will be envious as word of your incredible performances gets
          out among their wives… And think of all the money you’ll save when you
          don’t need to hand over your hard-earned cash for fake pharma pills
          anymore… What will you do with all that money? These are the thoughts
          on my mind as I write this letter to you Which is why when we started,
          men asked me if they could pay as much as 200k to fix their
          erections…. After all, it’s what you’d pay for a few months of
          artificial ED pills and one fourth the cost of a single testosterone
          injection… But I’m not some faceless corporation trying to extract
          money out of guys who are having a tough time with ED… I’m a real guy
          who’s been through ED hell just like you and millions of other men…and
          we guys need to stick together
        </p>
      </div>

      <div id="fourth-div">
        <img src={image4} alt="Image4" className="left" />
        <img src={testimony4} alt="testimony4" className="right" />
      </div>

      <div id="fifth-div">
        <p>MAXIMIZE MALE HEALTH WHERE IT MATTERS MOST</p>
        <div className="fifth-columns">
          <div className="column5">
            <img src={boosted} alt="Boosted" />
            <h4>BOOSTED T LEVELS</h4>
            <p>
              Boost your libido, muscle mass and energy levels by naturally
              stimulating T production. Your stamina, drive and your ability to
              make gains will be amplified.
            </p>
          </div>
          <div className="column5">
            <img src={blood} alt="Blood" />
            <h4>SUPERCHARGED BLOOD FLOW</h4>
            <p>
              From the bedroom to the weight room, improved circulation can help
              enhance your performance, improve stamina and energy levels and
              enhance blood flow to EVERY organ in the body.
            </p>
          </div>
          <div className="column5">
            <img src={deeper} alt="Deeper" />
            <h4>DEEPER SLEEP</h4>
            <p>
              Quality sleep and recovery are essential for vitality. Maximize
              your body’s ability to sleep deeper, longer AND burn fat while you
              do it.
            </p>
          </div>
        </div>
      </div>

      <div id="sixth-div">
        <img src={image5} alt="Image5" />
      </div>

      <div id="seventh-div">
        <img src={image7} alt="Image7" />
        <div className="content">
          <h3>Enhance Blood Flow</h3>
          <p>
            <b>
              Alpha Vigor Tea amplifies blood flow throughout your body,
              improving your overall wellness, energy levels and physical
              performance — in the bedroom and beyond!i
            </b>
          </p>
          <ul className="list7">
            <li>Increase Energy Levels with its natural ingredients</li>
            <li>Lower Blood Pressure</li>
            <li>Improve Sexual Dysfunction</li>
            <li>Natural Immune Support</li>
          </ul>
        </div>
      </div>

      <div id="eighth-div">
        <h4>Boost Testosterone Levels</h4>
        <p>
          This natural testosterone booster stimulates and supports healthy
          hormone production, increased energy levels in the gym and in the
          bedroom and improved overall male vitality.
        </p>
        <ul className="eighth-ul">
          <li>Boost Semen Volume and Fertility</li>
          <li>Stimulate and Support Testosterone Production</li>
          <li>Promote Overall Male Vitality</li>
          <li>Effortlessly Increase Muscle Mass</li>
        </ul>
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

      <div id="tenth-div">
        <h3 className="consistency">CONSISTENCY IS KEY!</h3>
        <p className="consistency">
          We recommend taking The stack for at least, 7 Days to see the same
          results as the participants in the study above...
        </p>
        <img src="./img/no-image" alt="whatsApp img" />
        <p>
          Although the products in this pack get to work right away to stimulate
          healthy testosterone production and improve male vitality, the results
          keep getting better and better with consistent use.
        </p>
        <h2>HERE IS WHY THIS COFFEE IS THE BEST SOLUTION...</h2>
        <img src={coffee} alt="Coffe cup" />
        <div id="four-column-stars">
          <div className="column">
            <img src="path-to-star-icon.png" alt="star" />
            <h3>Made From Natural Ingredients</h3>
            <p>
              Unlike other similar product that are made with harmful chemicals,
              this product is made from some rare Asian herbs (lotus leaf
              extract, guarana extract, senna leaf extract etc) which makes it
              the safest product out there without any side effects.
            </p>
          </div>
          <div className="column">
            <img src="path-to-star-icon.png" alt="star" />
            <h3>Long-Lasting Result</h3>
            <p>
              This product offers permanent solution and not temporary. Other
              similar products will continue to drain your money every month,
              but when you buy this product, it solves all the brouhaha once and
              for all: even the enlargement is permanent...
            </p>
          </div>
          <div className="column">
            <img src="path-to-star-icon.png" alt="star" />
            <h3>Fast Results Within 7 Days</h3>
            <p>
              You will not have to wait for 30days to see result. You will start
              seeing result as fast as the same day of using Man Power Herbal
              Tea
            </p>
          </div>
          <div className="column">
            <img src="path-to-star-icon.png" alt="star" />
            <h3>Works for All Conditions Dysfunction Wahala</h3>
            <p>
              This Herbal Cure revives the sleeping little man under no matter
              how long it has been sleeping, puts you in the mood everytime and
              boost energy.{" "}
            </p>
          </div>
        </div>
      </div>

      <div id="eleventh-div">
        <h1>
          DO YOU WANT TO START ENJOYING ROCK-HARD SATISFACTION & POWER-SURGING
          PERFORMANCE? THEN GET ANY OF OUR PACKAGES!
        </h1>

        <div id="package-columns">
          <div className="package">
            <h2>Basic Package</h2>
            <p>(20 Tea Bags Included)</p>
            <p>1 Pack of the ACTIVE VITALITY Tea Bag</p>
            <img src={bag1} alt="Basic Package" />
            <p className="price">3500 KES ONLY</p>
            <button className="package-btn">👍 I want This Package</button>
          </div>
          <div className="package">
            <h2>Premium Package</h2>
            <p>(40 Tea Bags Altogether)</p>
            <p>2 Packs of the ACTIVE VITALITY Tea Bags</p>
            <img src={bag2} alt="Premium Package" />
            <p className="price">6000 KES ONLY</p>
            <button className="package-btn">👍 I want This Package</button>
          </div>
          <div className="package">
            <h2>Advanced Package</h2>
            <p>(60 Tea Bags Cumulatively)</p>
            <p>3 Packs of the ACTIVE VITALITY Tea Bags</p>
            <img src={bag3} alt="Advanced Package" />
            <p className="price">8000 KES ONLY</p>
            <button className="package-btn">👍 I want This Package</button>
          </div>
        </div>
        <h3>What If This Doesn't Work For You?</h3>
        <p>
          We understand how difficult it is for you to buy items online but
          based on feedbacks from over 1,455 Men, this product works.
        </p>
        <p>
          But just to show you how confident we are in our product and how
          committed we are to your health, here is our “No Bullshit” Guarantee…
        </p>
      </div>

      <div id="twelveth-div">
        <h2>1455</h2>
        <p>Purchases</p>
      </div>

      <div id="guarantee-div">
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
          pretty sure they keep every kobo in their pockets, even when their
          pills do nothing for you.
        </p>
        <p>
          Test drive this hardening coffee for a full 1 month and if you don't
          get results, we will refund you without terms and conditions.
        </p>
      </div>

      <div id="faq-questions">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <h4 className="faq-question">Can young children use this?</h4>
        <p className="faq-ans">
          No, it is not for children. It is for adults at 18yrs+
        </p>
        <h4 className="faq-question">
          Does This Coffee Have Any Side Effects?
        </h4>
        <p className="faq-ans">
          No side effect at all, it is made from natural roots and has zero side
          effect…
        </p>
        <h4 className="faq-question">Why do you sell at these prices?</h4>
        <p className="faq-ans">
          Because we wish to make it affordable for everyone. After this season,
          you may not get it at this price again…
        </p>
        <h4 className="faq-question">When would I start seeing changes?</h4>
        <p className="faq-ans">
          Changes begin immediately within the first 48hrs
        </p>
      </div>

      <div id="third-last-div">
        <h1>
          TAKE YOUR PERFORMANCE IN THE GYM & BEDROOM TO THE NEXT LEVEL WITH THE
          SUPERCHARGE MALE COFFEE!
        </h1>
        <img src={belt} alt="belt img" style={{ height: "auto", width: "450px"}}/>
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
          Locations Here In Ghana And We Don’t Want A Situation Where Your Order
          Arrives At Your Location & You Are Not Available For Pickup. Because
          Such Situations Have Caused Us Great Losses Lately.
        </h5>
        <p>
          For more inquiries and questions of any kind, feel free to contact us
          and our customer team will respond within 24hrs. You can reach us on:
        </p>
        <h1>+254 722 257488</h1>
      </div>

      <div id="last-div">
        <p>
          The Contents Of This Website, Text, Images, Products Are Sold Or
          Distributed By LUFO VENTURES and Protected Under The KENYA Copyright
          Act Pursuant To Ghana And International Copyright Laws. Copy/Edit/Use
          Of Our Contents Without My Express Written Permission And You WILL Be
          Subject To The Maximum Fine/Penalty Imposed By The Law.
        </p>
        <h3>DISCLAIMER</h3>
        <p>
          THIS IS NOT FACEBOOK: This site is not part of the Facebook or
          Facebook Inc. website. In addition, this site is NOT endorsed by
          Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
      </div>

        <div className="static-div">
          ACTIVE VITALITY TEA
          <div className="click-here">
            <button> I WANT IT; CLICK HERE</button>
          </div>
        </div>
    </>
  );
};

export default MainPage;
