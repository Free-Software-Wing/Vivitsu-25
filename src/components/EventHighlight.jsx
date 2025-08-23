import { useEffect, useRef, useState } from "react";
import Web from "./Web";
import { supabase } from "../backend/supabaseClient.js";

const events = [  
  { 
    date: "22-08-2025",
    title: "Fusion Tech",
    description: "Dive into the world of LLMs (Large Language Models) and APIs. This workshop covered hands-on integration, best practices for API key management, and real-world demos to supercharge apps with AI.",
    image: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_4400,h_2500,g_auto/v1755937033/DSCN2172_lfa5dx.jpg"
  },
  { 
    date: "09,10-04-2025", 
    title: "Vivitsu 25", 
    description: "Vivitsu'25 continues the tradition of fostering open-source innovation, collaboration, and problem-solving. Featuring hackathons, workshops, and expert sessions across multiple domains, it provides students and developers a platform to showcase creativity and technical skills while embracing free software solutions.", 
    image: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_1080,h_643,g_auto/v1755935129/bf9ddfe4-e4d3-4a36-9711-5c551e61ea5d_aaaqf7.jpg" 
  },
  { 
    date: "28-03-2024", 
    title: "Foss-Fest", 
    description: "FOSSFEST is an event organized by the Free Software Wing (FSW) to promote the use and awareness of free and open-source software. It brings together students, tech enthusiasts, and industry experts through expert talks, interactive competitions, and engaging activities. The event fosters a strong open-source community and encourages participants to embrace free software solutions.", 
    image: "https://res.cloudinary.com/dpa0sb1tm/image/upload/c_crop,w_8000,h_4500,g_auto/v1743865273/IMG_7875_z7xpwt.jpeg" 
  },
  { 
    date: "19,20-04-2024", 
    title: "Vivitsu 24", 
    description: "Vivitsu'24, the flagship event of the Free Software Wing (FSW), was a grand celebration of open-source innovation across diverse domains like healthcare, travel & tourism, open innovation, smart automation, and agrotech. With expert speakers and engaging competitions, the event provided a platform for students to explore and implement free software solutions. Backed by strong faculty support, Vivitsu'24 witnessed enthusiastic participation, fostering a vibrant tech community. The event's success reinforced FSW's commitment to promoting open-source culture on campus.", 
    image: "1.jpg" 
  },
  { 
    date: "05-12-2023", 
    title: "Cyber-Bloom", 
    description: "At the onset of the Cyber Bloom event, attendees were required to install essential Software tools are VMware, kali,metasploitable designated for the occasion. Subsequently, the Cyber Bloom organizing team delivered comprehensive tutorials, guiding participants through practical applications, including threat detection, encryption, and secure data handling.", 
    image: "https://res.cloudinary.com/dpa0sb1tm/image/upload/v1743865114/Screenshot_2025-04-05_202817_vxmn0s.png" 
  },
  { 
    date: "28,29-03-2023", 
    title: "VIVITSU 1.0", 
    description: "The hackathon began with participants selecting from 10 predefined problem statements posted online. After a code of conduct briefing at 10:00 AM on April 28, the first evaluation round commenced at 11:00 AM. To maintain energy and engagement, meals (lunch, dinner, and breakfast) were provided, along with fun nighttime activities. The final jury evaluation occurred at 11:30 AM on April 29, followed by result announcements post-lunch. Winning teams received ₹10,000 per problem statement, culminating in a total prize pool of ₹1 lakh. The event concluded with a vote of thanks by the FSW coordinator.", 
    image: "vi1.0.png" 
  },
  { 
    date: "17-11-2022", 
    title: "Tech Bola 2.0", 
    description: "The event featured an interactive ticket-based game where participants marked answers on their cards as questions were read. Prizes were awarded for being first to mark 5 correct answers, completing any row, or finishing the entire ticket. The HoD of IT and FSW Faculty Coordinator presented gifts to winners, with refreshments served during the event.", 
    image: "tb2.0.png" 
  },
  { 
    date: "19-08-2022", 
    title: "Photo Fiesta", 
    description: "The event began with participants installing GIMP, a free and open-source image editing software, to prepare for the workshop. The FSW team then conducted an interactive walkthrough of the software, demonstrating key features through hands-on tutorials that covered practical applications like background removal, watermark removal, and GIF creation. Throughout the session, team members provided individual assistance, ensuring participants could follow along while promptly addressing any questions or difficulties. The event concluded with the recognition of the top three submissions, which were awarded prizes based on creativity and technical execution.", 
    image: "pf.png" 
  }
];


// if any event is there check line number 676
const upcomingEvent = {
  // date: "22-08-2025",
  title: "Coming Soon",
  shortDescription: "Stay tuned for our next exciting event from Free Software Wing!",
  fullDescription: "Stay tuned for our next exciting event from Free Software Wing!",
  image: "https://media.gettyimages.com/id/1469393237/video/4k-glowing-yellow-neon-text-coming-soon.jpg?s=640x640&k=20&c=dzDQuuUIod8gcf-EXQzeEXaz0iHZA6hXLn39p6QdJeI=",
  // venue: "Hall 1, GRIET",
  // time: "9:00 AM - 3:30 PM",
  // registrationDeadline: "22-08-2025",
  // amount: "₹120",
  // upiQrCode: "https://res.cloudinary.com/dpa0sb1tm/image/upload/v1755700996/Screenshot_2025-08-20_201225_bqpjwg.png" 
};

const RegistrationForm = ({ isOpen, onClose, event }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rollno: '',
    year: '',
    branch: '',
    transactionId: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate all fields
    if (!formData.name || !formData.email || !formData.phone || !formData.rollno || 
        !formData.year || !formData.branch || !formData.transactionId) {
      alert('Please fill all required fields');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Insert registration data into Supabase
      const { data, error } = await supabase
        .from('event_registrations')
        .insert([
          {
            event_title: event.title,
            event_date: event.date,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            rollno: formData.rollno,
            year: formData.year,
            branch: formData.branch,
            transaction_id: formData.transactionId,
            registration_date: new Date().toISOString(),
            status: 'pending',
            amount_paid: event.amount || '₹150'
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Registration data saved:', data);
      
      alert('Registration successful! Your registration is pending verification.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        rollno: '',
        year: '',
        branch: '',
        transactionId: ''
      });
      
      // Close modal after a short delay
      setTimeout(() => {
        onClose();
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error saving registration:', error);
      
      if (error.code === '23505') {
        alert('This transaction ID has already been used. Please check your transaction details.');
      } else {
        alert('There was an error with your registration. Please try again. Error: ' + error.message);
      }
      
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(5px)',
      padding: '10px'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        padding: window.innerWidth <= 768 ? '20px' : '40px',
        borderRadius: '15px',
        width: '95%',
        maxWidth: window.innerWidth <= 768 ? '100%' : '800px',
        maxHeight: '90vh',
        overflow: 'auto',
        border: '1px solid rgba(0, 247, 255, 0.3)',
        boxShadow: '0 8px 40px rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: window.innerWidth <= 768 ? '20px' : '30px'
        }}>
          <h2 style={{ color: '#00f7ff', margin: 0, fontSize: window.innerWidth <= 768 ? '1.5rem' : '2rem' }}>Event Registration</h2>
          <button
            onClick={onClose}
            disabled={isSubmitting}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#00f7ff',
              fontSize: window.innerWidth <= 768 ? '1.5rem' : '2rem',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              padding: '0',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: isSubmitting ? 0.5 : 1
            }}
          >
            ×
          </button>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
          gap: window.innerWidth <= 768 ? '20px' : '30px',
          opacity: isSubmitting ? 0.7 : 1,
          pointerEvents: isSubmitting ? 'none' : 'auto'
        }}>
          {/* Left Column - Event Details and Payment Info */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: window.innerWidth <= 768 ? '20px' : '30px'
          }}>
            {/* Event Details Section */}
            <div style={{
              background: 'rgba(0, 247, 255, 0.1)',
              padding: window.innerWidth <= 768 ? '15px' : '20px',
              borderRadius: '10px',
              border: '1px solid rgba(0, 247, 255, 0.2)'
            }}>
              <h3 style={{ color: 'white', marginTop: 0 }}>{event.title}</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: '10px 0' }}>{event.fullDescription}</p>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', 
                gap: window.innerWidth <= 768 ? '10px' : '15px', 
                marginTop: '15px' 
              }}>
                <div>
                  <strong style={{ color: '#00f7ff' }}>Date:</strong>
                  <span style={{ color: 'white', marginLeft: '10px' }}>{event.date}</span>
                </div>
                <div>
                  <strong style={{ color: '#00f7ff' }}>Time:</strong>
                  <span style={{ color: 'white', marginLeft: '10px' }}>{event.time}</span>
                </div>
                <div>
                  <strong style={{ color: '#00f7ff' }}>Venue:</strong>
                  <span style={{ color: 'white', marginLeft: '10px' }}>{event.venue}</span>
                </div>
                <div>
                  <strong style={{ color: '#00f7ff' }}>Deadline:</strong>
                  <span style={{ color: 'white', marginLeft: '10px' }}>{event.registrationDeadline}</span>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div style={{
              background: 'rgba(0, 247, 255, 0.1)',
              padding: window.innerWidth <= 768 ? '15px' : '20px',
              borderRadius: '10px',
              border: '1px solid rgba(0, 247, 255, 0.2)'
            }}>
              <h3 style={{ color: 'white', marginTop: 0 }}>Payment Information</h3>
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#00f7ff' }}>Registration Fee: </strong>
                <span style={{ color: 'white' }}>{event.amount || ''}</span>
              </div>
              
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: '10px 0', fontSize: '14px' }}>
                Please complete the payment using the UPI QR code and enter your transaction ID below.
              </p>
              
              <div style={{ textAlign: 'center', marginTop: '15px' }}>
                <img 
                  src={event.upiQrCode || ""} 
                  alt="UPI QR Code" 
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto', 
                    maxHeight: '200px', 
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }} 
                />
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '12px', marginTop: '8px' }}>
                  Scan to pay via UPI
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div style={{ flex: 1 }}>
            <form onSubmit={handleSubmit}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', 
                gap: window.innerWidth <= 768 ? '15px' : '20px', 
                marginBottom: window.innerWidth <= 768 ? '15px' : '20px' 
              }}>
                <div>
                  <label style={{ color: '#00f7ff', display: 'block', marginBottom: '8px' }}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: window.innerWidth <= 768 ? '10px' : '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(0, 247, 255, 0.3)',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                      boxSizing: 'border-box',
                      opacity: isSubmitting ? 0.6 : 1
                    }}
                  />
                </div>
                <div>
                  <label style={{ color: '#00f7ff', display: 'block', marginBottom: '8px' }}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: window.innerWidth <= 768 ? '10px' : '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(0, 247, 255, 0.3)',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                      boxSizing: 'border-box',
                      opacity: isSubmitting ? 0.6 : 1
                    }}
                  />
                </div>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', 
                gap: window.innerWidth <= 768 ? '15px' : '20px', 
                marginBottom: window.innerWidth <= 768 ? '15px' : '20px' 
              }}>
                <div>
                  <label style={{ color: '#00f7ff', display: 'block', marginBottom: '8px' }}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: window.innerWidth <= 768 ? '10px' : '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(0, 247, 255, 0.3)',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                      boxSizing: 'border-box',
                      opacity: isSubmitting ? 0.6 : 1
                    }}
                  />
                </div>
                <div>
                  <label style={{ color: '#00f7ff', display: 'block', marginBottom: '8px' }}>Roll Number *</label>
                  <input
                    type="text"
                    name="rollno"
                    value={formData.rollno}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: window.innerWidth <= 768 ? '10px' : '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(0, 247, 255, 0.3)',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                      boxSizing: 'border-box',
                      opacity: isSubmitting ? 0.6 : 1
                    }}
                  />
                </div>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', 
                gap: window.innerWidth <= 768 ? '15px' : '20px', 
                marginBottom: window.innerWidth <= 768 ? '15px' : '20px' 
              }}>
                <div>
                  <label style={{ color: '#00f7ff', display: 'block', marginBottom: '8px' }}>Year of Study *</label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: window.innerWidth <= 768 ? '10px' : '12px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(0, 247, 255, 0.3)',
                      borderRadius: '8px',
                      color: 'black',
                      fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                      boxSizing: 'border-box',
                      opacity: isSubmitting ? 0.6 : 1
                    }}
                  >
                    <option value="">Select Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>
                </div>
                <div>
                  <label style={{ color: '#00f7ff', display: 'block', marginBottom: '8px' }}>Branch/Stream *</label>
                  <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    placeholder="e.g., Computer Science"
                    style={{
                      width: '100%',
                      padding: window.innerWidth <= 768 ? '10px' : '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(0, 247, 255, 0.3)',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                      boxSizing: 'border-box',
                      opacity: isSubmitting ? 0.6 : 1
                    }}
                  />
                </div>
              </div>

              {/* Transaction ID Field */}
              <div style={{ marginBottom: window.innerWidth <= 768 ? '15px' : '20px' }}>
                <label style={{ color: '#00f7ff', display: 'block', marginBottom: '8px' }}>
                  Transaction ID *
                </label>
                <input
                  type="text"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Enter your UPI transaction ID"
                  style={{
                    width: '100%',
                    padding: window.innerWidth <= 768 ? '10px' : '12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(0, 247, 255, 0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                    boxSizing: 'border-box',
                    opacity: isSubmitting ? 0.6 : 1
                  }}
                />
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '12px', margin: '5px 0 0 0' }}>
                  Please enter the transaction ID from your payment receipt
                </p>
              </div>

              <div style={{ 
                display: 'flex', 
                gap: window.innerWidth <= 768 ? '10px' : '15px', 
                justifyContent: 'center',
                flexDirection: window.innerWidth <= 480 ? 'column' : 'row'
              }}>
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  style={{
                    padding: window.innerWidth <= 768 ? '10px 20px' : '12px 30px',
                    background: 'transparent',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '25px',
                    color: 'white',
                    fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    minHeight: '44px',
                    opacity: isSubmitting ? 0.5 : 1
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: window.innerWidth <= 768 ? '10px 20px' : '12px 30px',
                    background: isSubmitting 
                      ? 'rgba(0, 247, 255, 0.5)' 
                      : 'linear-gradient(45deg, #00f7ff, #0099cc)',
                    border: 'none',
                    borderRadius: '25px',
                    color: 'white',
                    fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isSubmitting ? 'none' : '0 4px 20px rgba(0, 247, 255, 0.3)',
                    minHeight: '44px',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? 'Processing...' : 'Register Now'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// The rest of the components (UpcomingEventCard, Timeline, EventHighlight) remain the same

const UpcomingEventCard = ({ event }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <div style={{
        width: '100%',
        maxWidth: window.innerWidth <= 768 ? '95%' : '800px',
        margin: window.innerWidth <= 768 ? '20px auto' : '40px auto',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(0, 247, 255, 0.3)',
        boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 247, 255, 0.2), rgba(0, 153, 204, 0.2))',
          padding: window.innerWidth <= 768 ? '15px' : '20px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(0, 247, 255, 0.2)'
        }}>
          <h2 style={{
            color: '#00f7ff',
            margin: '0 0 10px 0',
            fontSize: window.innerWidth <= 768 ? '1.4rem' : '1.8rem',
            textShadow: '0 0 10px rgba(0, 247, 255, 0.3)'
          }}>
            🎉 UPCOMING EVENT
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            margin: 0,
            fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem'
          }}>
            Don't miss out on our next amazing event!
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
          alignItems: 'stretch',
          gap: '0'
        }}>
          <div style={{
            flex: '1',
            padding: window.innerWidth <= 768 ? '20px' : '30px'
          }}>
            <img
              src={event.image}
              alt={event.title}
              style={{
                width: '100%',
                height: window.innerWidth <= 768 ? '200px' : '250px',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            />
          </div>

          <div style={{
            flex: '1',
            padding: window.innerWidth <= 768 ? '20px' : '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                background: 'rgba(0, 247, 255, 0.2)',
                color: '#00f7ff',
                padding: '8px 16px',
                borderRadius: '20px',
                display: 'inline-block',
                fontSize: window.innerWidth <= 768 ? '12px' : '14px',
                fontWeight: 'bold',
                marginBottom: '15px'
              }}>
                {event.date}
              </div>
              <h3 style={{
                color: 'white',
                margin: '0 0 15px 0',
                fontSize: window.innerWidth <= 768 ? '1.2rem' : '1.5rem',
                lineHeight: '1.2'
              }}>
                {event.title}
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                margin: '0 0 20px 0',
                fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                lineHeight: '1.5',
                textAlign: 'left'
              }}>
                {event.shortDescription}
              </p>
              <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: window.innerWidth <= 768 ? '12px' : '14px', marginBottom: '5px' }}>
                  📍 {event.venue}
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: window.innerWidth <= 768 ? '12px' : '14px' }}>
                  ⏰ {event.time}
                </div>
                {event.amount && (
                  <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: window.innerWidth <= 768 ? '12px' : '14px', marginTop: '5px' }}>
                    💰 Registration Fee: {event.amount}
                  </div>
                )}
              </div>
            </div>
            
            {/* registration button of event */}
            <button
              onClick={() => setIsFormOpen(false)}   //if any event is there set the false to true else keep it false
              style={{
                background: 'linear-gradient(45deg, #00f7ff, #0099cc)', 
                border: 'none',
                borderRadius: '25px',
                color: 'white',
                padding: window.innerWidth <= 768 ? '12px 24px' : '15px 30px',
                fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(0, 247, 255, 0.3)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                minHeight: '44px',
                width: window.innerWidth <= 768 ? '100%' : 'auto'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 25px rgba(0, 247, 255, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(0, 247, 255, 0.3)';
              }}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>

      <RegistrationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        event={event}
      />
    </>
  );
};

const Timeline = () => {
  const eventRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { rootMargin: "0px 0px -100px 0px", threshold: 0.2 }
    );

    eventRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => eventRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  return (
    <div style={{ 
      position: "relative", 
      width: window.innerWidth <= 768 ? "95%" : "80%", 
      margin: "auto", 
      padding: window.innerWidth <= 768 ? "30px 0" : "50px 0", 
      minHeight: "300vh",
      background: "transparent"
    }}>
      {/* Blue timeline line */}
      <div style={{
        position: "absolute",
        left: "50%",
        width: "4px",
        height: "100%",
        background: "#00f7ff",
        transform: "translateX(-50%)",
        zIndex: 1
      }}></div>
      
      {events.map((event, index) => {
        const isEven = index % 2 === 0;
        const flexDirection = window.innerWidth <= 768 ? "column" : (isEven ? "row" : "row-reverse");
        
        return (
          <div
            key={index}
            ref={(el) => (eventRefs.current[index] = el)}
            style={{
              position: "relative",
              width: "100%",
              margin: window.innerWidth <= 768 ? "60px 0" : "80px 0",
              padding: window.innerWidth <= 768 ? "15px 0" : "20px 0",
              opacity: 0,
              transform: "translateY(100px)",
              transition: "opacity 1s ease-out, transform 1s ease-out",
              background: "transparent"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection,
                alignItems: "center",
                width: "100%",
                gap: window.innerWidth <= 768 ? "20px" : "40px"
              }}
            >
              {/* Image container */}
              <div style={{ 
                flex: 1,
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                padding: window.innerWidth <= 768 ? "15px" : "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  style={{ 
                    width: "100%", 
                    height: "100%",
                    maxHeight: window.innerWidth <= 768 ? "150px" : "200px",
                    objectFit: "cover",
                    borderRadius: "4px"
                  }} 
                />
              </div>
              
              {/* Content container */}
              <div style={{ 
                flex: 1,
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                padding: window.innerWidth <= 768 ? "15px" : "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "white"
              }}>
                <h3 style={{ margin: "10px 0", color: "#00f7ff", fontSize: window.innerWidth <= 768 ? "14px" : "16px" }}>{event.date}</h3>
                <h2 style={{ margin: "5px 0", fontSize: window.innerWidth <= 768 ? "18px" : "24px" }}>{event.title}</h2>
                <p style={{ margin: "5px 0", fontSize: window.innerWidth <= 768 ? "12px" : "14px", lineHeight: "1.4" }}>{event.description}</p>
              </div>
            </div>
            
            {/* Timeline dot */}
            <div style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: window.innerWidth <= 768 ? "16px" : "20px",
              height: window.innerWidth <= 768 ? "16px" : '20px',
              background: "#00f7ff",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              boxShadow: "0 0 10px #00f7ff"
            }}></div>
          </div>
        );
      })}
    </div>
  );
};


const EventHighlight = () => {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      textAlign: "center", 
      margin: window.innerWidth <= 768 ? "20px 0" : "40px 0",
      background: "transparent",
      color: "white"
    }}>
      <div>
        <Web />
        <h1 style={{ 
          color: "white", 
          textAlign: "center",
          fontSize: window.innerWidth <= 768 ? "2rem" : "3rem",
          margin: window.innerWidth <= 768 ? "1rem 0" : "2rem 0",
          textShadow: "0 0 10px #00f7ff"
        }}>OUR EVENTS</h1>
      </div>

      {/* Upcoming Event Card */}
      <UpcomingEventCard event={upcomingEvent} />
      
      {/* Past Events Timeline */}
      <div style={{ width: '100%' }}>
        <h2 style={{ 
          color: "#00f7ff", 
          textAlign: "center",
          fontSize: window.innerWidth <= 768 ? "1.8rem" : "2.5rem",
          margin: window.innerWidth <= 768 ? "3rem 0 1.5rem 0" : "4rem 0 2rem 0",
          textShadow: "0 0 10px #00f7ff"
        }}>PAST EVENTS</h2>
        <Timeline />
      </div>
    </div>
  );
};

export default EventHighlight;