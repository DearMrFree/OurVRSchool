import { getStudentData } from "@/lib/api"
import { MultipleLettersOfRecommendation } from "@/components/MultipleLettersOfRecommendation"
import { notFound } from "next/navigation"

const letters = {
  "6": [
    {
      content: `It is with great pride and genuine admiration that I write this letter on behalf of Ellian Villalobos-Torres, a student who has redefined what it means to excel in both Mathematics and Physics. Over the past four years, I have had the privilege of teaching Ellian in every math and physics course he has undertaken—from foundational principles to advanced problem-solving in honors and capstone-level work. In my three decades as an educator, few students have matched Ellian's combination of intellectual vitality, creative ingenuity, and unyielding determination.

Ellian's brilliance in STEM subjects is both evident and extraordinary. His mathematical reasoning is not confined to equations and algorithms; instead, he approaches problems with a conceptual curiosity that seeks to uncover deeper truths. Whether deriving complex formulas or modeling physical phenomena, Ellian demonstrates a rare ability to connect abstract theory to real-world applications. For instance, in a recent physics project on fluid dynamics, Ellian designed a computational model to simulate ocean currents, incorporating advanced statistical methods he learned independently. His approach not only earned top marks but also left his peers and instructors in awe of his innovative thinking.

Beyond his academic prowess, Ellian embodies the spirit of collaborative learning. He has a remarkable talent for making challenging concepts accessible to others, often mentoring classmates who struggled with advanced material. In our classroom, he has transformed group projects into symphonies of synergy, where every member's contribution feels valued and impactful. His leadership style—marked by empathy, patience, and clarity—fosters an environment where others thrive.

Ellian's journey is not just one of academic achievement but also of profound resilience. His ability to balance rigorous coursework with family responsibilities—including managing his mother's business during a period of personal adversity—is nothing short of inspirational. This life experience has honed in him a unique blend of discipline, adaptability, and compassion, qualities that resonate deeply with your university's ethos of purpose-driven education.

In Ellian, you will find a student whose potential knows no bounds and whose character is as remarkable as his intellect. I recommend him to you with the highest level of enthusiasm and without reservation.`,
      recommenderName: "Dr. Freedom Cheteni",
      recommenderTitle: "Mathematics and Physics Teacher",
      signatureUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature-placeholder-NE0KPp8JwvtPFGlB8o8ufGvFR9Xm3F.png",
      salutation: "Dear Admissions Committee,",
    },
    {
      content: `I am writing to enthusiastically recommend Ellian Villalobos-Torres for admission to your esteemed university. As Ellian's Computer Science teacher and the faculty advisor for our school's Robotics Club, I have had the pleasure of witnessing his exceptional talents and dedication over the past three years.

Ellian's aptitude for computer science is truly remarkable. He possesses not only a deep understanding of programming concepts but also an innate ability to apply these concepts creatively to solve complex problems. In our Advanced Placement Computer Science course, Ellian consistently demonstrated a level of insight and innovation that surpassed even my highest expectations.

One of Ellian's most impressive qualities is his ability to bridge the gap between theoretical knowledge and practical application. For our school's annual tech showcase, Ellian developed an AI-powered educational assistant that could adapt its teaching style based on individual student learning patterns. This project not only showcased his technical skills but also highlighted his commitment to using technology to make a positive impact on society.

In the Robotics Club, Ellian's leadership has been transformative. He spearheaded our team's transition to more advanced robotics systems, introducing machine learning algorithms that significantly improved our robots' performance. Under his guidance, our team reached the national finals of the FIRST Robotics Competition for the first time in our school's history.

What sets Ellian apart is not just his technical brilliance, but his ability to inspire and elevate those around him. He has a gift for explaining complex concepts in accessible terms, and he never hesitates to help his peers. Ellian's patience and enthusiasm have encouraged many students, particularly those from underrepresented backgrounds in STEM, to pursue their interest in computer science.

Ellian's ethical approach to technology is also worth noting. He is deeply conscious of the societal implications of AI and has initiated thoughtful discussions on responsible tech development in our classes. This level of maturity and foresight is rare in a high school student and speaks volumes about Ellian's potential to be a leader in the field.

In conclusion, Ellian Villalobos-Torres is an exceptional student with the potential to make significant contributions to the field of computer science. His combination of technical skill, innovative thinking, leadership, and ethical awareness makes him an ideal candidate for your university. I give him my highest recommendation and am confident that he will be an outstanding addition to your academic community.`,
      recommenderName: "Prof. Aisha Nakamura",
      recommenderTitle: "Computer Science Teacher and Robotics Club Advisor",
      signatureUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature-placeholder-NE0KPp8JwvtPFGlB8o8ufGvFR9Xm3F.png",
      salutation: "To the Admissions Committee,",
    },
    {
      content: `It is my distinct pleasure to recommend Ellian Villalobos-Torres for admission to your university. As the Principal of The VR School, I have had the opportunity to observe Ellian's growth and achievements throughout his high school career, and I can confidently say that he is one of the most exceptional students I have encountered in my 25 years in education.

Ellian's academic record speaks for itself – a perfect GPA in our most challenging curriculum, including numerous Advanced Placement and Honors courses. However, what truly sets Ellian apart is his insatiable curiosity and his ability to apply his knowledge across disciplines in innovative ways.

One of Ellian's most remarkable qualities is his leadership. As the president of our Student Government, Ellian has demonstrated an uncanny ability to unite diverse groups, mediate conflicts, and inspire his peers to action. His initiative to create a peer tutoring program that pairs upperclassmen with struggling younger students has had a profound impact on our school community, improving academic outcomes and fostering a culture of mutual support.

Ellian's commitment to social responsibility is equally impressive. Recognizing the challenges faced by local small businesses during the pandemic, Ellian developed a free workshop series teaching basic digital marketing skills. This initiative not only helped numerous local entrepreneurs but also showcased Ellian's ability to apply his technical knowledge to real-world problems.

In the classroom, Ellian is known for his thought-provoking questions and his ability to spark engaging discussions. His teachers consistently praise his intellectual curiosity and his knack for connecting ideas across different subjects. For instance, in a joint project between our History and Computer Science departments, Ellian created an interactive virtual reality experience that allowed users to explore ancient civilizations, demonstrating his ability to blend technology with humanities in compelling ways.

What impresses me most about Ellian, however, is his character. Despite his numerous achievements, he remains humble and always eager to learn. His empathy and willingness to help others have made him a role model in our school community. Whether he's mentoring younger students, volunteering at local STEM outreach programs, or leading environmental initiatives, Ellian consistently demonstrates a commitment to making a positive impact.

In conclusion, Ellian Villalobos-Torres is not just an outstanding student; he is a young leader with the potential to make significant contributions to your university community and beyond. His combination of academic excellence, innovative thinking, leadership skills, and strong moral character make him an ideal candidate for your institution. I recommend him to you with my utmost enthusiasm and without any reservation.

Ellian has my highest recommendation, and I am confident that he will be an exceptional addition to your university. If you have any further questions, please do not hesitate to contact me.`,
      recommenderName: "Dr. Evelyn Chen",
      recommenderTitle: "Principal, The VR School",
      signatureUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature-placeholder-NE0KPp8JwvtPFGlB8o8ufGvFR9Xm3F.png",
      salutation: "Dear Admissions Committee,",
    },
  ],
  "1": [
    {
      content: `It is with great enthusiasm that I write this letter of recommendation for Jiang Ian Wenkai, an exceptional student who has consistently demonstrated extraordinary talent and dedication in the field of mathematics. As Ian's Advanced Mathematics teacher for the past two years, I have had the privilege of witnessing his remarkable intellectual growth and unwavering commitment to academic excellence.

Ian's mathematical abilities are truly outstanding. He possesses not only a profound understanding of complex mathematical concepts but also an intuitive grasp of their practical applications. In our Advanced Calculus and Linear Algebra courses, Ian consistently outperformed his peers, often solving problems with an elegance and efficiency that surprised even seasoned educators.

What sets Ian apart is not just his analytical prowess, but his creative approach to mathematical challenges. For instance, in our school's annual Mathematics Olympiad, Ian developed an innovative solution to a particularly complex optimization problem, employing a combination of calculus and graph theory that was well beyond the scope of our curriculum. His approach not only won him the top prize but also became a topic of discussion among our faculty for its originality and effectiveness.

Ian's intellectual curiosity extends far beyond the classroom. He actively seeks out additional learning opportunities, participating in numerous mathematics competitions and summer programs. Notable among these was his participation in the Research Science Institute at MIT, where he collaborated with university researchers on a project involving applications of topology in data analysis. The resulting paper, co-authored by Ian, is currently under review for publication in a peer-reviewed journal – an extraordinary achievement for a high school student.

Beyond his individual accomplishments, Ian has shown a commendable commitment to fostering a love for mathematics among his peers. He initiated and leads our school's Mathematics Club, where he organizes weekly problem-solving sessions and mentors younger students. His patient and clear explanations have inspired many students to pursue advanced mathematics, significantly raising the overall standard of mathematical achievement in our school.

Ian's excellence is not limited to mathematics. He maintains top grades across all subjects, demonstrating a well-rounded intellect. His teachers consistently praise his articulate contributions to class discussions, his insightful essays, and his ability to draw connections between different fields of study.

In conclusion, Jiang Ian Wenkai is, without doubt, one of the most promising young mathematicians I have encountered in my 20-year teaching career. His combination of exceptional analytical skills, creative problem-solving abilities, and dedication to academic excellence makes him an ideal candidate for the most selective universities. I am confident that Ian will not only excel in any challenging academic environment but will also make significant contributions to the field of mathematics in the future.

I give Ian my highest recommendation without any reservation. He will be an outstanding asset to your university's academic community, and I am certain he will continue to achieve great things in his future endeavors.`,
      recommenderName: "Dr. Sophia Liang",
      recommenderTitle: "Advanced Mathematics Teacher",
      signatureUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature-placeholder-NE0KPp8JwvtPFGlB8o8ufGvFR9Xm3F.png",
      salutation: "Dear Admissions Committee,",
    },
    {
      content: `I am writing to wholeheartedly recommend Jiang Ian Wenkai for admission to your prestigious university. As Ian's Physics teacher and the faculty advisor for our school's Science Olympiad team, I have had the pleasure of working closely with him over the past three years and can attest to his exceptional abilities and character.

Ian's aptitude for physics is nothing short of remarkable. He possesses an intuitive understanding of physical principles that goes far beyond rote memorization of formulas. In our Advanced Placement Physics C course, Ian consistently demonstrated an ability to grasp complex concepts quickly and apply them to solve intricate problems. His lab reports are models of clarity and insight, often exploring implications of experiments that escape the notice of his peers.

What truly sets Ian apart is his ability to connect theoretical physics with real-world applications. For our school's science fair, Ian designed and built a sophisticated earthquake detection system using a network of low-cost sensors and machine learning algorithms. This project not only won the top prize but also attracted the attention of local geologists who are now collaborating with Ian to implement a scaled-up version of his system.

In the Science Olympiad, Ian's contributions have been invaluable. He has medaled in multiple events, including Astronomy, Circuit Lab, and Thermodynamics, showcasing his broad scientific knowledge. As team captain this year, Ian's leadership has been instrumental in our team's success. He organizes study sessions, mentors younger members, and has a talent for motivating his teammates to push beyond their perceived limits.

Ian's passion for physics extends beyond competitions. He actively seeks out advanced learning opportunities, having completed several online courses from top universities in quantum mechanics and astrophysics. Last summer, Ian interned at a nearby university's physics department, where he assisted in research on dark matter detection. The graduate students he worked with were impressed by his ability to quickly grasp complex experimental setups and contribute meaningful insights to the project.

While Ian's scientific achievements are impressive, equally noteworthy is his character. He is unfailingly kind, always willing to help his classmates understand difficult concepts. His humility, despite his numerous accomplishments, is refreshing. Ian has a gift for explaining complex ideas in accessible terms, a skill that has made him a favorite study partner among his peers.

Moreover, Ian is not solely focused on science. He is an accomplished pianist and a member of our school's debate team, demonstrating a well-rounded intellect and diverse interests. His ability to excel in these areas while maintaining his extraordinary performance in STEM subjects is a testament to his exceptional time management skills and broad intellectual capacity.

In conclusion, Jiang Ian Wenkai is one of the most promising young scientists I have encountered in my teaching career. His combination of analytical brilliance, creative problem-solving skills, leadership abilities, and genuine passion for learning makes him an ideal candidate for your university. I am confident that Ian will not only thrive in your rigorous academic environment but will also make significant contributions to your university community and, eventually, to the field of physics.

I recommend Ian to you without any reservation and with my highest enthusiasm. He is precisely the kind of student who will make the most of the opportunities your institution offers and go on to do great things in the world of science.`,
      recommenderName: "Dr. Marcus Feynman",
      recommenderTitle: "Physics Teacher and Science Olympiad Advisor",
      signatureUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature-placeholder-NE0KPp8JwvtPFGlB8o8ufGvFR9Xm3F.png",
      salutation: "To the Admissions Committee,",
    },
    {
      content: `It is with great pleasure and the highest level of enthusiasm that I recommend Jiang Ian Wenkai for admission to your esteemed university. As the Principal of The VR School, I have had the privilege of observing Ian's remarkable journey throughout his high school years, and I can confidently say that he stands out as one of the most exceptional students in our school's history.

Ian's academic achievements are truly outstanding. He has maintained a perfect GPA while taking the most challenging courses our school offers, including a full slate of Advanced Placement classes. However, what truly sets Ian apart is not just his grades, but the depth of his intellectual curiosity and his ability to apply his knowledge in innovative ways across multiple disciplines.

In the realm of mathematics and science, Ian's accomplishments are particularly noteworthy. He has consistently ranked at the top in national and international competitions, including gold medals in the International Mathematical Olympiad and the International Physics Olympiad. These achievements speak not only to Ian's exceptional intellect but also to his dedication and ability to perform under pressure.

What impresses me most about Ian, however, is how he uses his talents to benefit others. He founded our school's STEM Mentorship Program, where he and other high-achieving students tutor underclassmen and students from underserved local schools. This initiative has not only improved academic performance across our student body but has also fostered a culture of mentorship and community service.

Ian's leadership extends beyond academics. As the president of our Student Council, he has spearheaded several initiatives that have had a lasting impact on our school community. Notable among these is the "VR for All" project, where Ian led a team in developing virtual reality educational modules to make complex scientific concepts more accessible to students with different learning styles. This innovative approach to education has been so successful that several other schools in our district are now adopting it.

Despite his numerous achievements, Ian remains remarkably humble and always eager to learn. He approaches challenges with a positive attitude and has a unique ability to inspire those around him. His teachers consistently praise his thoughtful contributions to class discussions and his knack for asking questions that push the boundaries of conventional thinking.

Ian's interests and talents extend beyond STEM fields. He is an accomplished classical pianist, having performed at several prestigious venues, and is a key member of our school's debate team. This breadth of interests demonstrates Ian's well-rounded nature and his ability to excel across diverse domains.

What truly sets Ian apart, in my opinion, is his genuine desire to make a positive impact on the world. He has a keen awareness of global issues and is always looking for ways to apply his knowledge and skills to address real-world problems. For instance, inspired by his family's roots in rural China, Ian initiated a project to develop low-cost, solar-powered water purification systems for remote villages. This project not only showcases his technical skills but also his compassion and global mindset.

In conclusion, Jiang Ian Wenkai is not just an outstanding student; he is a young innovator, a compassionate leader, and a global citizen. His exceptional intellect, coupled with his drive to use his talents for the greater good, makes him an ideal candidate for your university. I am confident that Ian will not only thrive in your challenging academic environment but will also make significant contributions to your university community and beyond.

I recommend Ian to you with my utmost enthusiasm and without any reservation. He represents the very best of what our educational system can produce, and I am certain he will continue to achieve great things and make us all proud in the years to come.

If you require any further information, please do not hesitate to contact me.`,
      recommenderName: "Dr. Evelyn Chen",
      recommenderTitle: "Principal, The VR School",
      signatureUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature-placeholder-NE0KPp8JwvtPFGlB8o8ufGvFR9Xm3F.png",
      salutation: "Dear Admissions Committee,",
    },
  ],
  "2": [
    {
      content: `I am writing to enthusiastically recommend Emily Johnson for admission to your esteemed university. As Emily's English teacher for the past year, I have had the pleasure of witnessing her growth as a writer, critical thinker, and compassionate individual.

Emily consistently demonstrates a remarkable aptitude for language and literature. Her essays are not only well-structured and insightful but also showcase a level of creativity that sets her apart from her peers. In our recent unit on Shakespeare, Emily's analysis of "Hamlet" went beyond the typical interpretations, drawing fascinating parallels between the play's themes and contemporary social issues.

What truly impresses me about Emily is her passion for using language as a tool for positive change. She initiated a school-wide poetry slam focused on environmental awareness, which not only showcased her organizational skills but also her ability to inspire others through words. The event was a resounding success, bringing together students from diverse backgrounds and raising funds for local conservation efforts.

Emily's talents extend beyond the classroom. As the editor of our school newspaper, she has revitalized the publication, introducing thought-provoking columns and ensuring that a wide range of student voices are represented. Her leadership in this role demonstrates her commitment to fostering open dialogue and her ability to work collaboratively with others.

In addition to her literary pursuits, Emily has shown a keen interest in environmental science. She often incorporates environmental themes into her writing, demonstrating an interdisciplinary approach to learning that I find particularly promising for her future academic endeavors.

Emily's intellectual curiosity, coupled with her strong work ethic and genuine desire to make a positive impact, makes her an ideal candidate for your university. I am confident that she will not only excel academically but also contribute significantly to your campus community.

I recommend Emily Johnson with the utmost enthusiasm and without reservation. She is precisely the kind of student who will thrive in a challenging academic environment and go on to make meaningful contributions to society.`,
      recommenderName: "Ms. Sarah Thompson",
      recommenderTitle: "English Teacher",
      signatureUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature-placeholder-NE0KPp8JwvtPFGlB8o8ufGvFR9Xm3F.png",
      salutation: "Dear Admissions Committee,",
    },
    {
      content: `It is with great pleasure that I write this letter of recommendation for Emily Johnson, an exceptional student and a budding environmental scientist. As Emily's Environmental Science teacher and the faculty advisor for our school's Eco Club, I have had the opportunity to observe her passion for environmental issues and her dedication to making a positive impact on our planet.

Emily's performance in my Environmental Science class has been nothing short of outstanding. She consistently demonstrates a deep understanding of complex ecological concepts and an ability to apply this knowledge to real-world environmental challenges. Her final project, which focused on developing a sustainable water management plan for our local community, was particularly impressive. Emily's research was thorough, her analysis insightful, and her proposed solutions both innovative and practical.

What sets Emily apart is not just her academic prowess, but her commitment to environmental activism. As a key member of our school's Eco Club, Emily has been instrumental in implementing several sustainability initiatives on campus. She spearheaded a successful campaign to reduce single-use plastics in our cafeteria and organized a series of workshops to educate her peers about climate change and individual actions they can take to reduce their carbon footprint.

Emily's leadership skills are equally noteworthy. She has a natural ability to inspire and motivate others, turning environmental concerns into positive action. Her peers look up to her not just for her knowledge, but for her enthusiasm and her ability to make complex environmental issues accessible and relevant to high school students.

Moreover, Emily's interdisciplinary approach to environmental studies is commendable. She often incorporates insights from her other classes, particularly English and Art, into her environmental projects. This holistic perspective on environmental issues demonstrates a maturity of thought that is rare in students her age.

In conclusion, Emily Johnson is not just an excellent student, but a young environmental leader with the potential to make significant contributions to the field. Her combination of academic excellence, passionate activism, and leadership skills makes her an ideal candidate for your university's environmental science program.

I wholeheartedly recommend Emily for admission to your university. I am confident that she will not only excel in her studies but will also be a valuable asset to your campus community, driving positive environmental change wherever she goes.`,
      recommenderName: "Dr. Michael Rivera",
      recommenderTitle: "Environmental Science Teacher and Eco Club Advisor",
      signatureUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature-placeholder-NE0KPp8JwvtPFGlB8o8ufGvFR9Xm3F.png",
      salutation: "To the Admissions Committee,",
    },
    {
      content: `It is with great enthusiasm that I recommend Emily Johnson for admission to your university. As the Principal of The VR School, I have had the pleasure of watching Emily grow into an exceptional student, a passionate environmental advocate, and a natural leader during her time at our institution.

Emily's academic record speaks for itself - she has consistently maintained high grades across a diverse range of subjects, demonstrating not only her intellectual capacity but also her well-rounded nature. What truly sets Emily apart, however, is her remarkable ability to apply her knowledge in practical, impactful ways.

In her freshman year, Emily has already made a significant mark on our school community. Her initiative in establishing a school-wide recycling program has not only improved our campus's environmental footprint but has also raised awareness about sustainability among her peers. Emily's ability to rally support for this program, educate her fellow students, and work with the administration to implement lasting changes showcases her leadership skills and her commitment to environmental stewardship.

Emily's passion for the environment is matched by her love for literature and creative expression. As the editor of our school newspaper, she has used this platform to bring attention to important environmental issues, demonstrating her ability to communicate complex ideas effectively. Her series of articles on local conservation efforts was so well-received that it caught the attention of our city council, leading to increased community involvement in these initiatives.

What impresses me most about Emily is her genuine desire to make a positive impact on the world around her. Whether she's organizing beach clean-ups, tutoring younger students, or participating in community service projects, Emily approaches every task with enthusiasm, dedication, and empathy. Her ability to inspire others and bring people together for a common cause is truly remarkable.

Academically, Emily has shown a particular aptitude for environmental science and English, but she excels across all subjects. Her teachers consistently praise her intellectual curiosity, her willingness to grapple with challenging concepts, and her ability to think critically and creatively.

In conclusion, Emily Johnson is not just an outstanding student; she is a young leader with the potential to make significant contributions to both your university community and the wider world. Her combination of academic excellence, environmental passion, leadership skills, and genuine compassion makes her an ideal candidate for your institution.

I recommend Emily to you without reservation and with my highest enthusiasm. I am confident that she will thrive in your rigorous academic environment and will continue to be a force for positive change wherever her path leads her.`,
      recommenderName: "Dr. Evelyn Chen",
      recommenderTitle: "Principal, The VR School",
      signatureUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature-placeholder-NE0KPp8JwvtPFGlB8o8ufGvFR9Xm3F.png",
      salutation: "Dear Admissions Committee,",
    },
  ],
  "3": [
    {
      content: `It is with great enthusiasm that I write this letter of recommendation for Michael Chen, an exceptional student who has consistently demonstrated extraordinary talent and dedication in the field of computer science. As Michael's AP Computer Science teacher for the past year, I have had the privilege of witnessing his remarkable intellectual growth and unwavering commitment to academic excellence.

Michael's aptitude for computer science is truly outstanding. He possesses not only a profound understanding of programming concepts but also an intuitive grasp of their practical applications. In our AP Computer Science Principles course, Michael consistently outperformed his peers, often solving complex coding challenges with an elegance and efficiency that surprised even seasoned programmers.

What sets Michael apart is not just his technical prowess, but his creative approach to problem-solving. For instance, in our annual coding competition, Michael developed an innovative algorithm for optimizing renewable energy distribution in smart cities. His solution not only won him the top prize but also caught the attention of local tech companies for its potential real-world applications.

Michael's intellectual curiosity extends far beyond the classroom. He actively seeks out additional learning opportunities, participating in numerous hackathons and coding bootcamps. Notable among these was his participation in the Google Code-in contest, where he contributed to several open-source projects, demonstrating his ability to work with real-world codebases and collaborate with global teams.

Beyond his individual accomplishments, Michael has shown a commendable commitment to fostering a love for computer science among his peers. He initiated and leads our school's Coding Club, where he organizes weekly coding sessions and mentors younger students. His patient explanations and enthusiasm have inspired many students to pursue computer science, significantly raising the overall standard of tech literacy in our school.

Michael's excellence is not limited to computer science. He maintains top grades across all subjects, demonstrating a well-rounded intellect. His teachers consistently praise his articulate contributions to class discussions, his insightful essays, and his ability to draw connections between different fields of study.

In conclusion, Michael Chen is, without doubt, one of the most promising young computer scientists I have encountered in my teaching career. His combination of exceptional coding skills, creative problem-solving abilities, and dedication to academic excellence makes him an ideal candidate for the most selective universities. I am confident that Michael will not only excel in any challenging academic environment but will also make significant contributions to the field of computer science in the future.

I give Michael my highest recommendation without any reservation. He will be an outstanding asset to your university's academic community, and I am certain he will continue to achieve great things in his future endeavors.`,
      recommenderName: "Mr. David Nguyen",
      recommenderTitle: "AP Computer Science Teacher",
      signatureUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature-placeholder-NE0KPp8JwvtPFGlB8o8ufGvFR9Xm3F.png",
      salutation: "Dear Admissions Committee,",
    },
    {
      content: `I am writing to wholeheartedly recommend Michael Chen for admission to your prestigious university. As Michael's AP World History teacher and the faculty advisor for our school's Model United Nations team, I have had the pleasure of working closely with him over the past year and can attest to his exceptional abilities and character.

Michael's aptitude for historical analysis and global affairs is nothing short of remarkable. He possesses an intuitive understanding of complex historical processes that goes far beyond memorization of facts and dates. In our AP World History course, Michael consistently demonstrated an ability to grasp intricate historical concepts quickly and apply them to analyze contemporary global issues.

What truly sets Michael apart is his ability to connect historical events with current global challenges. For our school's History Fair, Michael created a compelling multimedia presentation on the historical roots of current geopolitical tensions in East Asia. This project not only won the top prize but also sparked meaningful discussions among students about the importance of historical context in understanding today's world.

In the Model United Nations program, Michael's contributions have been invaluable. He has represented our school at several conferences, consistently winning awards for his well-researched positions and diplomatic skills. As a team leader this year, Michael's guidance has been instrumental in our team's success. He organizes intensive research sessions, mentors new members, and has a talent for fostering collaboration among delegates with diverse viewpoints.

Michael's passion for global affairs extends beyond competitions. He actively seeks out opportunities to engage with international issues, having completed several online courses on diplomacy and international relations from top universities. Last summer, Michael interned at a local non-profit focused on promoting cross-cultural understanding, where he assisted in organizing cultural exchange programs for high school students.

While Michael's achievements in history and global affairs are impressive, equally noteworthy is his character. He is unfailingly kind, always willing to help his classmates understand difficult concepts. His humility, despite his numerous accomplishments, is refreshing. Michael has a gift for bringing people together and fostering constructive dialogue, a skill that has made him a natural leader among his peers.

Moreover, Michael is not solely focused on humanities. His excellence in computer science and mathematics demonstrates his well-rounded intellect and diverse interests. His ability to excel across such diverse fields while maintaining his extraordinary performance in global studies is a testament to his exceptional time management skills and broad intellectual capacity.

In conclusion, Michael Chen is one of the most promising young scholars I have encountered in my teaching career. His combination of analytical brilliance, global awareness, leadership abilities, and genuine passion for learning makes him an ideal candidate for your university. I am confident that Michael will not only thrive in your rigorous academic environment but will also make significant contributions to your university community and, eventually, to the field of international relations and global policy.

I recommend Michael to you without any reservation and with my highest enthusiasm. He is precisely the kind of student who will make the most of the opportunities your institution offers and go on to make a positive impact on our increasingly interconnected world.`,
      recommenderName: "Dr. Amelia Thornton",
      recommenderTitle: "AP World History Teacher and Model UN Advisor",
      signatureUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature-placeholder-NE0KPp8JwvtPFGlB8o8ufGvFR9Xm3F.png",
      salutation: "To the Admissions Committee,",
    },
    {
      content: `It is with great pleasure and the highest level of enthusiasm that I recommend Michael Chen for admission to your esteemed university. As the Principal of The VR School, I have had the privilege of observing Michael's remarkable journey throughout his high school years, and I can confidently say that he stands out as one of the most exceptional students in our school's history.

Michael's academic achievements are truly outstanding. He has maintained a perfect GPA while taking the most challenging courses our school offers, including a full slate of Advanced Placement classes. However, what truly sets Michael apart is not just his grades, but the depth of his intellectual curiosity and his ability to excel across multiple disciplines.

In the realm of computer science and mathematics, Michael's accomplishments are particularly noteworthy. He has consistently ranked at the top in national coding competitions and mathematics olympiads. His project on artificial intelligence applications in climate change prediction, which combined his expertise in computer science with his interest in environmental issues, won top honors at the State Science Fair and is currently being considered for implementation by local environmental agencies.

What impresses me most about Michael, however, is how he uses his talents to benefit others. He founded our school's Peer Coding Mentorship Program, where he and other advanced students tutor beginners in programming skills. This initiative has not only improved computer science literacy across our student body but has also fostered a culture of collaboration and knowledge-sharing.

Michael's leadership extends beyond academics. As the president of our Model United Nations club, he has spearheaded several initiatives that have had a lasting impact on our school community. Notable among these is the "Global Awareness Week," where Michael organized a series of workshops, guest lectures, and cultural events to promote understanding of international issues among our students. This event has now become an annual tradition, attracting participation from other schools in our district and fostering a spirit of global citizenship among our students.

Michael's interests and talents extend beyond technology and international relations. He is an accomplished violinist, having performed with our school orchestra at Carnegie Hall, and is a key member of our debate team. This breadth of interests demonstrates Michael's well-rounded nature and his ability to excel across diverse domains.

What truly sets Michael apart, in my opinion, is his genuine desire to use his knowledge and skills to make a positive impact on the world. He has a keen awareness of global issues and is always looking for ways to apply his technological expertise to address real-world problems. For instance, inspired by his family's roots in rural China, Michael developed a mobile app to connect small-scale farmers with urban markets, helping to improve their economic opportunities. This project not only showcases his technical skills but also his compassion and global mindset.

In conclusion, Michael Chen is not just an outstanding student; he is a young innovator, a compassionate leader, and a global citizen. His exceptional intellect, coupled with his drive to use his talents for the greater good, makes him an ideal candidate for your university. I am confident that Michael will not only thrive in your challenging academic environment but will also make significant contributions to your university community and beyond.

I recommend Michael to you with my utmost enthusiasm and without any reservation. He represents the very best of what our educational system can produce, and I am certain he will continue to achieve great things and make us all proud in the years to come.

If you require any further information, please do not hesitate to contact me. It would be my pleasure to elaborate further on Michael's outstanding qualities and achievements.`,
      recommenderName: "Dr. Evelyn Chen",
      recommenderTitle: "Principal, The VR School",
      signatureUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature-placeholder-NE0KPp8JwvtPFGlB8o8ufGvFR9Xm3F.png",
      salutation: "Dear Admissions Committee,",
    },
  ],
  "7": [
    {
      content: `It is with great enthusiasm that I write this letter of recommendation for Agathe Bertin, an exceptional student who has consistently demonstrated extraordinary talent and dedication across multiple disciplines. As Agathe's Computer Science teacher and the faculty advisor for our school's AI and Robotics Club, I have had the privilege of witnessing her remarkable intellectual growth and unwavering commitment to academic excellence over the past four years.

Agathe's aptitude for computer science and artificial intelligence is truly outstanding. She possesses not only a profound understanding of complex programming concepts but also an intuitive grasp of their practical applications in cutting-edge fields like machine learning and natural language processing. In our Advanced Placement Computer Science course and subsequent advanced AI classes, Agathe consistently outperformed her peers, often solving complex coding challenges with an elegance and efficiency that surprised even seasoned professionals in the field.

What sets Agathe apart is not just her technical prowess, but her creative approach to problemsolving and her ability to bridge multiple disciplines. For instance, in her senior capstone project, Agathe developed an AI-powered system for early detection of plant diseases, combining her expertise in computer vision, machine learning, and her passion for environmental sustainability. This project not only won top honors at the State Science Fair but also caught the attention of agricultural technology firms for its potential real-world applications.

Agathe's intellectual curiosity extends far beyond the classroom. She actively seeks out additional learning opportunities, participating in numerous hackathons, coding competitions, and research internships. Notable among these was her internship at a leading AI research lab last summer, where she contributed to a project on improving natural language understanding in multilingual contexts. The researchers she worked with were impressed by her ability to quickly grasp complex concepts and contribute meaningful insights to the project.

Beyond her individual accomplishments, Agathe has shown a commendable commitment to fostering a love for technology and innovation among her peers. She co-founded our school's "AI for Good" initiative, where she organizes workshops and mentoring sessions to help other students understand the potential of AI in addressing global challenges. Her patient explanations and contagious enthusiasm have inspired many students, particularly young women, to pursue careers in STEM fields.

Agathe's excellence is not limited to computer science and mathematics. She maintains top grades across all subjects, demonstrating a well-rounded intellect. Her language teachers praise her fluency in French and Russian, while her contributions to class discussions in literature and history showcase her critical thinking skills and broad cultural awareness.

In conclusion, Agathe Bertin is, without doubt, one of the most promising young technologists and innovators I have encountered in my teaching career. Her combination of exceptional technical skills, creative problem-solving abilities, interdisciplinary thinking, and dedication to using technology for social good makes her an ideal candidate for the most selective universities. I am confident that Agathe will not only excel in any challenging academic environment but will also make significant contributions to the fields of computer science and artificial intelligence in the future.

I give Agathe my highest recommendation without any reservation. She will be an outstanding asset to your university's academic community, and I am certain she will continue to achieve great things in her future endeavors.`,
      recommenderName: "Dr. Alan Turing",
      recommenderTitle: "Computer Science Teacher and AI & Robotics Club Advisor",
      signatureUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature-placeholder-NE0KPp8JwvtPFGlB8o8ufGvFR9Xm3F.png",
      salutation: "Dear Admissions Committee,",
    },
    {
      content: `I am writing to wholeheartedly recommend Agathe Bertin for admission to your prestigious university. As Agathe's Advanced Mathematics teacher and the faculty advisor for our school's International Mathematics Olympiad team, I have had the pleasure of working closely with her over the past four years and can attest to her exceptional abilities and character.

Agathe's aptitude for mathematics is nothing short of remarkable. She possesses an intuitive understanding of complex mathematical concepts that goes far beyond mere computation. In our Advanced Calculus, Linear Algebra, and Data Science Mathematics courses, Agathe consistently demonstrated an ability to grasp abstract concepts quickly and apply them to solve intricate problems. Her solutions often showcase a level of elegance and insight that I typically expect from graduate-level students.

What truly sets Agathe apart is her ability to connect theoretical mathematics with real-world applications, particularly in the fields of computer science and artificial intelligence. For our school's annual Mathematics and AI Symposium, Agathe presented a project on the mathematical foundations of neural networks, demonstrating a deep understanding of both the underlying mathematical principles and their practical implementation in AI systems. This project not only won the top prize but also sparked meaningful discussions among students and faculty about the intersection of mathematics and emerging technologies.

In the International Mathematics Olympiad program, Agathe's contributions have been invaluable. She has represented our school and country at several international competitions, consistently winning gold medals and special awards for creative problem-solving. As team captain this year, Agathe's leadership has been instrumental in our team's success. She organizes rigorous training sessions, mentors younger team members, and has a talent for breaking down complex problems into manageable steps, a skill that has significantly improved our team's performance in time-pressured competition environments.

Agathe's passion for mathematics extends beyond competitions. She actively seeks out advanced learning opportunities, having completed several university-level courses in topics such as abstract algebra, topology, and mathematical logic. Last summer, Agathe participated in a research program at a prestigious university, where she worked on a project involving applications of category theory in quantum computing. The professors she worked with were impressed by her ability to quickly grasp graduate-level concepts and contribute meaningful insights to the research.

While Agathe's mathematical achievements are impressive, equally noteworthy is her character. She is unfailingly kind, always willing to help her classmates understand difficult concepts. Her humility, despite her numerous accomplishments, is refreshing. Agathe has a gift for making complex mathematical ideas accessible, a skill that has made her a favorite peer tutor and study group leader.

Moreover, Agathe is not solely focused on mathematics and computer science. She is an accomplished linguist, fluent in French and Russian, and a key member of our school's debate team. This breadth of interests demonstrates Agathe's well-rounded nature and her ability to excel across diverse domains. Her ability to articulate complex mathematical and scientific concepts in multiple languages is particularly impressive and will undoubtedly serve her well in an increasingly globalized scientific community.

In conclusion, Agathe Bertin is one of the most promising young mathematicians I have encountered in my teaching career. Her combination of mathematical brilliance, interdisciplinary thinking, leadership abilities, and genuine passion for learning makes her an ideal candidate for your university. I am confident that Agathe will not only thrive in your rigorous academic environment but will also make significant contributions to your university community and, eventually, to the fields of mathematics and its applications in technology.

I recommend Agathe to you without any reservation and with my highest enthusiasm. She is precisely the kind of student who will make the most of the opportunities your institution offers and go on to do great things in the world of mathematics and beyond.`,
      recommenderName: "Dr. Sophie Germain",
      recommenderTitle: "Advanced Mathematics Teacher and International Mathematics Olympiad Team Advisor",
      signatureUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature-placeholder-NE0KPp8JwvtPFGlB8o8ufGvFR9Xm3F.png",
      salutation: "To the Admissions Committee,",
    },
    {
      content: `It is with great pleasure and the highest level of enthusiasm that I recommend Agathe Bertin for admission to your esteemed university. As the Principal of The VR School, I have had the privilege of observing Agathe's remarkable journey throughout her high school years, and I can confidently say that she stands out as one of the most exceptional students in our school's history.

Agathe's academic achievements are truly outstanding. She has maintained a perfect GPA while taking the most challenging courses our school offers, including a full slate of Advanced Placement and Honors classes across multiple disciplines. However, what truly sets Agathe apart is not just her grades, but the depth of her intellectual curiosity and her ability to excel across multiple fields, particularly in the intersection of mathematics, computer science, and linguistics.

In the realm of computer science and artificial intelligence, Agathe's accomplishments are particularly noteworthy. She has consistently ranked at the top in national and international coding competitions, and her projects in AI and machine learning have garnered attention from tech industry leaders. Her senior capstone project, an AI system that can generate poetry in multiple languages while maintaining complex poetic structures, showcases her unique ability to blend her technical skills with her passion for languages and literature.

What impresses me most about Agathe, however, is how she uses her talents to benefit others. She co-founded our school's "AI for Social Good" program, where she leads a team of students in developing AI-powered solutions for local non-profit organizations. This initiative has not only provided valuable technical assistance to community organizations but has also inspired many of her peers to consider how they can use their skills to make a positive impact on society.

Agathe's leadership extends beyond technology and academics. As the president of our school's Multilingual Society, she has spearheaded several initiatives that have had a lasting impact on our school community. Notable among these is the "Global Voices" project, where Agathe developed a peer-to-peer language exchange program that pairs students learning different languages. This program has not only improved language learning outcomes but has also fostered cross-cultural understanding and friendships among our diverse student body.

Despite her numerous achievements, Agathe remains remarkably humble and always eager to learn. She approaches challenges with a positive attitude and has a unique ability to inspire those around her. Her teachers consistently praise her thoughtful contributions to class discussions and her knack for asking questions that push the boundaries of conventional thinking.

Agathe's interests and talents extend beyond STEM fields and languages. She is an accomplished pianist, having performed at several prestigious venues, and is a key member of our school's debate team. This breadth of interests demonstrates Agathe's well-rounded nature and her ability to excel across diverse domains.

What truly sets Agathe apart, in my opinion, is her genuine desire to use her knowledge and skills to make a positive impact on the world. She has a keen awareness of global issues and is always looking for ways to apply her technological expertise to address real-world problems. For instance, inspired by her multilingual background, Agathe initiated a project to develop an AI-powered translation tool specifically designed to preserve idiomatic expressions and cultural nuances, aiming to foster better cross-cultural communication.

In conclusion, Agathe Bertin is not just an outstanding student; she is a young innovator, a compassionate leader, and a global citizen. Her exceptional intellect, coupled with her drive to use her talents for the greater good, makes her an ideal candidate for your university. I am confident that Agathe will not only thrive in your challenging academic environment but will also make significant contributions to your university community and beyond.

I recommend Agathe to you with my utmost enthusiasm and without any reservation. She represents the very best of what our educational system can produce, and I am certain she will continue to achieve great things and make us all proud in the years to come.

If you require any further information, please do not hesitate to contact me. It would be my pleasure to elaborate further on Agathe's outstanding qualities and achievements.`,
      recommenderName: "Dr. Evelyn Chen",
      recommenderTitle: "Principal, The VR School",
      signatureUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature-placeholder-NE0KPp8JwvtPFGlB8o8ufGvFR9Xm3F.png",
      salutation: "Dear Admissions Committee,",
    },
  ],
}

export default async function LetterPage({ params }: { params: { id: string } }) {
  if (!params.id) {
    console.error("No student ID provided in params")
    notFound()
  }

  const student = await getStudentData(params.id)

  if (!student) {
    console.error(`Student with id ${params.id} not found`)
    notFound()
  }

  const studentLetters = letters[params.id as keyof typeof letters]

  if (!studentLetters) {
    console.error(`No letters found for student with id ${params.id}`)
    notFound()
  }

  return (
    <MultipleLettersOfRecommendation
      studentName={student.name}
      studentId={student.studentId}
      letters={studentLetters}
    />
  )
}

