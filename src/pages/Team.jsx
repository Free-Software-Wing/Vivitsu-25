// import Laptop from "../components/LaptopDomains";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  // Sample data - replace with your actual team data
  const teamData = [
    {
      members: [
        { name: "Dr. K Ravi Kiran", designation: "Faculty Coordinator",photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/v1743438363/ravi_kiran_sir_bslsc3.jpg", linkedin: "" },
      ]
    },
    {
      members: [
        { name: "R.Sree Tripura", designation: "President",photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/v1743426484/IMG-20250330-WA0020_-_sree_tripura_fs7noh.jpg", linkedin: "https://www.linkedin.com/in/sree-tripura-r-8b3365284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Gayathri Kodipaka",designation: "Vice-President", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_899,h_1000,g_auto/v1743426484/IMG-20250218-WA0035_-_Gayathri_Kodipaka_glbveb.jpg", linkedin: "https://www.linkedin.com/in/gayathri-kodipaka-05755b2a6/" },
        { name: "Dheeraj Madugula",designation: "General Secretary", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_1037,h_1000,g_auto/v1743427148/WhatsApp_Image_2025-03-31_at_6.48.18_PM_wqfa83.jpg", linkedin: "http://www.linkedin.com/in/dheeraj-madugula" },
        { name: "Jhansi Lakshmi",designation: "Joint Secretary", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_1400,h_1000,g_auto/v1743426499/WhatsApp_Image_2024-09-24_at_11.33.53_PM_-_jhanu_A_-_jhanu_A_bhgb9n.jpg", linkedin: "https://www.linkedin.com/in/jhansi-lakshmi-924447301/" },
        { name: "Simhadri Srihitha",designation: "Treasurer", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_2000,h_1300/v1743777936/WhatsApp_Image_2025-03-31_at_21.55.56_-_srihitha_simhadri_lmihew.jpg", linkedin: "www.linkedin.com/in/srihitha-simhadri-b42961304" },
      ]
    },
    {
      title: "Tech Team",
      members: [
        { name: "Subham Kumar Shee",designation: "Tech Lead", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_350,h_490,g_auto/v1743426464/A-20250216-WA0006_-_Subham_kumar_fhw4hr.jpg", linkedin: "https://www.linkedin.com/in/subham-kumar-shee-221886328/" },
        { name: "Shaik Nada",designation: "OSC Lead / Tech Co-Lead", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_800,h_900,g_auto/v1769523453/8fbb7ea8-76d9-45b4-a97d-6708fd740948_ihmvck.jpg", linkedin: "https://www.linkedin.com/in/shaik-nada-20831a30a/" },
      ]
    },
    {
      members: [
        { name: "Varun",designation: "Tech Member", photo: "", linkedin: "" },
        { name: "Akshay Chandra",designation: "Tech Member", photo: "", linkedin: "" },
        { name: "Rohit",designation: "Tech Member", photo: "", linkedin: "" },

      ]
    },
    {
        title: "Event Management",
        members: [
          { name: "Ritvik Bairagouni",designation: "Event Management Lead", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_700,h_1000,g_auto/v1743777594/IMG_5812_-_Ritvik_Bairagouni_uvwfdw.png", linkedin: "https://www.linkedin.com/in/ritvik-bairagouni1072004?trk=contact-info" },
          { name: "Revanth Sallangula",designation: "Event Management Co-Lead ", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/v1743426496/Screenshot_2025-03-25_235421_-_Revanth_Sallangula_ohnuxd.png", linkedin: "linkedin.com/in/revsal" },
          { name: "Anjani Sai",designation: "Event Management Member", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_1000,h_1000,g_auto/v1743426465/Anjani_sai_-_Anjani_Sai_z3bzxp.jpg", linkedin: "https://www.linkedin.com/in/soma-yella-anjani-sai-307932336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
          { name: "M Deekshitha",designation: "Event Management Member", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_1000,h_1500,g_auto/v1743426499/vivitsu_-_Deekshitha_M_fy4qpi.jpg", linkedin: "https://www.linkedin.com/in/deekshitham028" },
          { name: "Narayan Karthikeyan",designation: "Event Management Member", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/v1743426466/IMG_6803_-_Karthikeya_K_uo0cgv.jpg", linkedin: "https://www.linkedin.com/in/karthikeya-k-b48b5b27a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },

        ]
      },
      {
        title: "Publicity",
        members: [
          { name: "Emima",designation: "Publicity Lead", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/v1743426464/1730120901985_-_Emima_Reddy_rfnujb.jpg", linkedin: "https://www.linkedin.com/in/emima-reddy-959574305" },
          { name: "Sai Teja Reddy",designation: "Publicity Lead", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/v1743426466/IMG_6591_-_Sai_Teja_Reddy_xwvd4i.jpg", linkedin: "https://www.linkedin.com/in/sai-teja-reddy-017963255/" },
          { name: "K.Uday Kumar",designation: "Publicity Member", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/v1743431007/IMG_5035_-_Uday_Kumar2_q3f5h1.jpg", linkedin: "https://www.linkedin.com/in/uday-kumar-318690303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
          { name: "Siva Sudhamsh",designation: "Publicity Member", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,h_500,g_auto/v1743426500/WhatsApp_Image_2025-03-25_at_22.11.42_87672f3b_-_Siva_Sudhamsh_dnptck.jpg", linkedin: "https://www.linkedin.com/in/siva-sudhamsh-8589082ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
          { name: "Juvvadi Pranava",designation: "Publicity Member", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/v1743426466/IMG_20241019_210400_-_Pranava_Juvvadi_nyvbqa.jpg", linkedin: "https://www.linkedin.com/in/pranava-juvvadi-2009552b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        ]
      },
      {
        title: "Database & Documentation Team",
        members: [
          { name: "Srivalli Grandhi",designation: "Lead Content Writer", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/v1743426484/IMG-20250215-WA0065_-_Srivalli_G_b8juad.jpg", linkedin: "https://www.linkedin.com/in/srivalli-grandhi-b44547301" },
          { name: "Rusheeka Akinapelli",designation: "Content Writer", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_3000,h_2000,g_auto/v1743426484/IMG20241108151414_-_Rusheeka_dnoffi.jpg", linkedin: "https://www.linkedin.com/in/rusheeka-akinapelli-ba8bab32a/" },
          { name: "Divyani Nigam",designation: "Database Member", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_1700,h_1400,g_auto/v1743426466/IMG-20231118-WA0008_-_Divyani_varf8y.jpg", linkedin: "www.linkedin.com/in/divyani-nigam-49b8a9294" },
          { name: "Swetha Achyutuni",designation: "Database Member", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_250,h_300,g_auto/v1743426495/Photo_from_-_Swetha_Achyutuni._vvagqt.jpg", linkedin: "" },
        ]
      },
      {
        title: "PR & Logistics Team",
        members: [
          { name: "Jayesh",designation: "PR & Logistics Member", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_1000,h_600,g_auto/v1743426498/Screenshot_20250325_221339_Gallery_-_Jayesh_B_nfe4qh.jpg", linkedin: "https://www.linkedin.com/in/jayesh-b-b13690275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
          { name: "Veda Reddy Ailuri",designation: "PR & Logistics Member", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_1000,h_400,g_auto/v1743426466/IMG-20240601-WA0177_2_-_Ailuri_VedaReddy_mjzumq.jpg", linkedin: "https://www.linkedin.com/in/veda-ailuri-reddy-27b62034b" },
          { name: "Arya Banda",designation: "PR & Logistics Member", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_2000,h_2000,g_auto/v1743426465/20241106_154503_-_ARYA_BANDA_zeexd0.jpg", linkedin: "https://www.linkedin.com/in/arya-banda-749558347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
          { name: "P. Sriram Rishvith",designation: "PR & Logistics Member", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_2900,h_2500,g_auto/v1743426483/IMG-20241130-WA0041_-_sri_ram_rishvith_mbzxrf.jpg", linkedin: "www.linkedin.com/in/sriram-rishvith-paladugu-ba507b332" },
        ]
      },
      {
        title: "Design ",
        members: [
          { name: "Susanna Bhukya",designation: "Graphic Designer Lead", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_1000,h_1500,g_auto/v1743943555/IMG-20250403-WA0018_m4vz61.jpg", linkedin: "https://www.linkedin.com/in/susanna-john-a564a428a/" },
          { name: "Keerthi BogiReddy",designation: "Graphic Designer Co-Lead", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/v1743426466/IMG_20250325_225005_-_Keerthi_Bogireddy_jgpxsw.jpg", linkedin: "https://www.linkedin.com/in/keerthi-bogireddy-9a00a2291/" },
          { name: "Anirudh Inturi",designation: "Graphic Designer", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/v1743426463/1734688689951_-_Anirudh_Inturi_fjfpdf.jpg", linkedin: "https://www.linkedin.com/in/anirudh-inturi-a043322a6/" },
          { name: "Almas Tamanna",designation: "Graphic Designer", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_2800,h_3000,g_auto/v1743778689/IMG_2967_-_Almas_Tamanna_-_Almas_Tamanna_jcyvlz.jpeg", linkedin: "http://linkedin.com/in/almas-tamanna-122a2a314" },
        ]
      },
      {
        members: [
          { name: "Ruthvik Sharma",designation: "Graphic Designer", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_1900,h_1400,g_auto/v1743426499/SmartSelect_20250205-202610_Gallery_-_Ruthvik_Sharma_orfgph.jpg", linkedin: "https://www.linkedin.com/in/ruthvik-s-6a4a732a1" },
          { name: "Arnipalli Nanda Nandan ",designation: "Graphic Designer", photo: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_2300,h_1000/v1743426465/dp-2_-_Nanda_nandan_Arnipalli_u7az7v.jpg", linkedin: "https://www.linkedin.com/in/nanda-nandan-arnipalli-442598336/" },
        ]
      },
    // Add other teams similarly (Event Management, PR and Logistics, Design)
  ];

  // Neon animation keyframes
  const flicker = {
    "0%": { textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff" },
    "19%": { textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff" },
    "20%": { textShadow: "none" },
    "21%": { textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff" },
    "23%": { textShadow: "none" },
    "25%": { textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff" },
    "54%": { textShadow: "none" },
    "56%": { textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff" },
    "100%": { textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff" }
  };

  return (
    <div style={{
      padding: "2rem",
      textAlign: "center",
      backgroundColor: "transparent",
      minHeight: "100vh"
    }}>      
       <div style={{ marginTop: "3rem" }}>
        <h1 style={{
          fontSize: "4rem",
          color: "#fff",
          textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff",
          marginBottom: "3rem",
          animation: "flicker 1.5s infinite alternate",
          "@keyframes flicker": flicker
        }}>CORE COMMITTEE</h1>
        
        {teamData.map((team, index) => (
          <div key={index} style={{ marginBottom: "3rem" }}>
            <h2 style={{
              fontSize: "2rem",
              color: "#fff",
              marginBottom: "1.5rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
              textShadow: "0 0 10px #0ff"
            }}>{team.title}</h2>
            
            <div style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2rem"
            }}>
              {team.members.map((member, i) => (
                <div key={i} style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "160px"
                }}>
                  <div style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid #0ff",
                    boxShadow: "0 0 15px #0ff",
                    marginBottom: "1rem",
                    transition: "transform 0.3s",
                    ":hover": {
                      transform: "scale(1.05)"
                    }
                  }}>
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }} 
                    />
                  </div>
                  
                  <h3 style={{
                    color: "#fff",
                    fontSize: "1.1rem",
                    marginBottom: "0.3rem",
                    fontWeight: "500"
                  }}>{member.name}</h3>
                  
                  <p style={{
                    color: "#aaa",
                    fontSize: "0.9rem",
                    marginBottom: "0.8rem",
                    fontStyle: "italic"
                  }}>{member.designation}</p>
                  
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: "#0ff",
                      fontSize: "1.5rem",
                      transition: "transform 0.3s, color 0.3s"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#0077b5";
                      e.currentTarget.style.transform = "scale(1.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#0ff";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <FaLinkedin />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;