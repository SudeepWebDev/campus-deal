class BlogPost {
  constructor(blogImgSrc, blogTitle, blogDate, blogAuthor, blogContent) {
    this.blogImgSrc = blogImgSrc;
    this.blogTitle = blogTitle;
    this.blogDate = blogDate;
    this.blogAuthor = blogAuthor;
    this.blogContent = blogContent;
  }

  render() {
    const blogPost = document.createElement("div");
    blogPost.classList.add("blog-post");

    const img = document.createElement("img");
    img.src = this.blogImgSrc;
    img.alt = this.blogTitle + " Image";
    blogPost.appendChild(img);

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("blog-post-content");
    blogPost.appendChild(contentContainer);

    const heading = document.createElement("h2");
    heading.textContent = this.blogTitle;
    contentContainer.appendChild(heading);

    const meta = document.createElement("p");
    meta.classList.add("post-meta");
    meta.innerHTML = `<i class="far fa-calendar-alt"></i> ${this.blogDate} | <i class="far fa-user"></i> ${this.blogAuthor}`;
    contentContainer.appendChild(meta);

    const postContent = document.createElement("p");
    postContent.textContent = this.blogContent.split(" ").slice(0, 20).join(" ") + "...";
    contentContainer.appendChild(postContent);

    const readMore = document.createElement("a");
    //   readMore.href = "";
    readMore.classList.add("read-more");
    readMore.textContent = "Read More";
    contentContainer.appendChild(readMore);

    //   const fullContent = document.createElement("div");
    //   fullContent.classList.add("full-content");
    //   fullContent.style.display = "none";
    //   fullContent.textContent = this.content;
    //   contentContainer.appendChild(fullContent);

    readMore.addEventListener("click", () => {
      // postContent.textContent = this.blogContent;
      postContent.innerHTML = this.blogContent;
      // fullContent.style.display = "block";
      readMore.style.display = "none";
    });

    return blogPost;
  }
}



function showBlogs() {
  const blogImgSrc = ["/college-campus/main/images/stress_blog.jpeg", "/college-campus/main/images/inter_blog.jpeg", "/college-campus/main/images/motivation_blog.jpeg", "/college-campus/main/images/loan_blog.jpeg"];
  const blogTitle = ['Tips to deal with stress in exam time.', 'The importance of internships in college blog', 'How to Stay Motivated in College', 'How to Manage Student Loan Debt After Graduation'];
  const blogDate = ['March 17, 2023', 'March 17, 2023', 'March 17, 2023', 'March 17, 2023'];
  const blogAuthor = ['Shubham', 'Aryan', 'Aryan', 'Aryan'];
  const blogContent = [
    `The stress of exams affects almost all students. It is critical to deal with this pressure and discover little methods to cope up with this pressure of final exams. Exam time can be the toughest time for some students. Sweat-soaked palms and heart palpitations are the things that most students tend to experience as soon as they realize that the exams are about to start. The pressure to perform well along with the pressure to meet the heightened expectations of parents and the society make it tougher for them to concentrate. But just if you know how to manage this stress, you can turn the situation in your favor and can come up with outstanding results.
          <br><br>
          <h3>Some tried and tested tips are:</h3>
          <br>
          <h4>De-stress Yourself with Breaks</h4>
          
          Breaks are indeed necessary if you want to enjoy your studies. And, hence, even the most extraordinary study timetables should permit at least a short break. You can space out your breaks evenly throughout your study schedule. Do plan out a 10-minute break after every 1.5 hours of study. This will facilitate better absorption of the concepts and will keep you invigorated throughout. Engage in your favorite activities during your break time and you’ll see how these short breaks will do wonders in taking your exam fever and stress off your mind.
          <br><br>
          <h4>Exercise Regularly</h4>
          
          Adding Exercise to your daily routine is a good way to rejuvenate yourself and fill in positive energy. This helps improve your concentration power and builds focus. Get involved in Yoga classes or simply meditate in the morning. This will help you get relaxed and will help bring the change for better.
          <br><br>
          <h4>Tune in to your Favorite Music</h4>
          <br>
          Listening to music is one of the best activities when it comes to bidding goodbye to stress. Tuning in to the music of your choice can create a positive environment and lift your mood. Though traditional music is prescribed as the best sort of music to help boost your brain power but you can definitely choose the music you like as it will help you to get refreshed after hectic study schedule.
          <br><br>
          <h4>Sleep Well</h4>
          <br>
          Studies have revealed that seven to eight hours sleep pattern is necessary for the body to function well. Hence, it is important to take a sound sleep of at least eight hours during the exam days as well. Try and take proper rest and sleep well so that you get up refreshed and your mind can capture its maximum efficiency.
          <br><br>
          <h4>Take Good Care of your Diet</h4>
          <br>
          Green leafy vegetables and food rich in proteins and vitamins are must for students. Taking proper nutrients and healthy diet helps to keep your brain active, healthy, and sharp. Try and avoid fried foods as they are heavy on the stomach and may make you feel lethargic and sleepy. Also, avoid too much intake of caffeine as it negatively impacts your health. Instead, drink adequate amounts of water as it will not only keep you hydrated but will also keep you fresh and active.
          <br><br>
          <h4>Stay Positive</h4>
          <br>
          Spend time with people who have a positive aura. Try and maintain as much positivity as possible as it will help you stay focused and full of vigor.`,

    `
      Internships can be incredibly valuable experiences for college students, providing them with real-world work experience and a chance to explore potential career paths. 
      <br><br>
      <h3>Here are some reasons why internships are so important:</h3>
      <br>
      <h4>Gain practical work experience:</h4>
      Internships offer students the chance to gain practical experience in their field of study, giving them a leg up when it comes to finding a job after graduation. Internships provide hands-on training that can't be found in a classroom.
      <br><br>
      <h4>Develop professional skills:</h4> In addition to gaining work experience, internships provide opportunities to develop professional skills such as communication, teamwork, problem-solving, and time management. These skills are essential for success in any career.
      <br><br>
      <h4>Make valuable connections:</h4> Internships can provide opportunities to make connections in your field of study. These connections can lead to job offers, mentorships, and future networking opportunities`,

    `
  
      Staying motivated in college can be a challenge, especially when you're juggling coursework, extracurricular activities, and a social life. 
      <br><br>
      <h3>Here are some tips for staying motivated:</h3>
      <br>
      <h4>Set goals:</h4> Setting specific, achievable goals can help you stay motivated throughout the semester. Break your larger goals down into smaller, more manageable ones and make a plan for achieving them.
      <br><br>
      <h4>Stay organized:</h4> Keeping track of assignments, deadlines, and other important information can help you stay on top of your workload and avoid feeling overwhelmed. Use a planner, calendar, or digital tools to keep yourself organized.
      <br><br>
      <h4>Find a support system:</h4> Surround yourself with people who encourage and support you, whether it's friends, family members, or professors. Having a support system can help you stay motivated and positive when things get tough.`,

    `Managing student loan debt after graduation can be a daunting task, but there are several strategies you can use to make it more manageable. 
      <br><br>
      <h3>Here are some tips:</h3>
      <br>
      <h4>Understand Your Loans:</h4> 
      Make sure you understand the terms of your student loans, including the interest rates, repayment plans, and any other conditions or requirements. This will help you make informed decisions about how to manage your debt.
      <br><br>
      <h4>Create a Budget:</h4> 
      Create a budget that takes into account your income, expenses, and student loan payments. This will help you prioritize your spending and ensure that you're making your loan payments on time.
      <br><br>
      <h4>Consider Consolidation or Refinancing:</h4> 
      If you have multiple loans with different interest rates, consolidating or refinancing your loans may be a good option. This can simplify your payments and potentially lower your interest rate.`
  ];

  for (let i = 0; i < blogImgSrc.length; i++) {
    const post = new BlogPost(`https://raw.githubusercontent.com/SudeepWebDev${blogImgSrc[i]}`, blogTitle[i], blogDate[i], blogAuthor[i], blogContent[i]);
    const postElement = post.render();
    document.querySelector('section.blog').appendChild(postElement);

  }
}
showBlogs();