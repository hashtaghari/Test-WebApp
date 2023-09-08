"use client";

import React from 'react';


const boxStyle = {
  width: '30%',  // Adjust the width as needed to evenly space the boxes
  height: '100px',
  backgroundColor: 'lightblue',
  border: '1px solid #ccc',
  margin: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};



// Function to submit the form data to the server and download the Excel file
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior if applicable

  const formData = new FormData(e.target);

  // show the form data as an alert to the user
  alert(`Submitting the following data:\n\n${JSON.stringify(Object.fromEntries(formData))}`);
  fetch('/submit', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      // Check if the response status is OK (200)
      if (response.ok) {
        // Create a link element to trigger the download
        const a = document.createElement('a');
        a.href = URL.createObjectURL(response.blob());
        a.download = 'form_responses.xlsx';
        a.style.display = 'none';
        document.body.appendChild(a);

        // Trigger a click event on the link element to start the download
        a.click();

        // Clean up the link element
        document.body.removeChild(a);
      } else {
        // Handle the error (e.g., show an error message)
        console.error('Error downloading Excel file');
      }
    })
    .catch((error) => {
      // Handle network or other errors
      console.error('Network error:', error);
    });
}

export default function Home() {
  return (
    <div>
      {/* Create a banner with width 100%, height 70vh, and a white outline */}
      <div
        style={{
          width: '100%',
          height: '60vh',
          backgroundColor: 'transparent',
          border: '1px solid white',
          position: 'relative', // To position the text and logos inside the banner
        }}
      >
        {/* Text saying "Trusted By:" */}
        <p
          style={{
            position: 'absolute',
            bottom: '140px', // Adjust as needed to position the text
            left: '10px', // Adjust as needed to position the text
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Trusted By:
        </p>

        {/* Logos of four clients */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            bottom: '40px', // Adjust as needed to position the logos
            left: '10px', // Adjust as needed to position the logos
          }}
        >
          {/* Replace the src attribute with the actual image URLs */}
          <img
            src="/client1.png"
            alt="Client 1"
            style={{ width: '50px', marginRight: '10px' }}
          />
          <img
            src="/client2.png"
            alt="Client 2"
            style={{ width: '50px', marginRight: '10px' }}
          />
          <img
            src="/client3.png"
            alt="Client 3"
            style={{ width: '50px', marginRight: '10px' }}
          />
          <img
            src="/client4.png"
            alt="Client 4"
            style={{ width: '50px' }}
          />
        </div>
      </div>

      <div>
        {/* Heading with padding */}
        <h1 style={{ paddingTop: '40px', paddingLeft: '40px' }}>HEADING</h1>

        {/* Container for YouTube video and second banner */}
        <div style={{ marginTop: '20px' }}>
          {/* YouTube video on the right side */}
          <div
            style={{
              float: 'right',
              paddingRight: '80px',
              width: '45%', // Adjust the width as needed
            }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zTBHOraUqeE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          {/* Create a banner with width 100%, height 60vh, a white outline */}
          <div
            style={{
              width: '100%', // Adjust the width as needed
              height: '60vh',
              backgroundColor: 'transparent',
              border: '1px solid white',
              clear: 'both', // Add this to clear the float and position the second banner below the YouTube video
              marginTop: '20px', // Add a 20px gap between the video and the second banner
              position: 'relative', // To position the text and logos inside the banner
            }}
          >
            {/* Content for the second banner */}
            <h1
              style={{
                position: 'absolute',
                top: '20px', // Adjust as needed to position the text
                left: '10px', // Adjust as needed to position the text
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              HEADING
            </h1>
            <div
              style={{
                width: '60%',
                height: '100%',
                float: 'left',
                borderRight: '1px solid white', // Add a vertical line to divide the two boxes
              }}
            >
              {/* Content for the left box (60%) */}
              <p
                style={{
                  position: 'absolute',
                  top: '40px', // Adjust as needed to position the text
                  left: '10px', // Adjust as needed to position the text
                  color: 'white',
                  fontSize: '10px',
                  marginRight: '40%',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id est non sapien vehicula consequat. Cras ac semper est. Etiam ac dui id mi ullamcorper bibendum. Fusce non ex ut tortor eleifend dignissim. Phasellus non volutpat augue. Nullam tristique, lectus non fringilla pharetra, purus quam bibendum turpis, eu lacinia augue elit ac quam. Curabitur euismod volutpat odio a vestibulum. Donec euismod purus eu dolor tincidunt, eget tempor justo luctus. Aliquam pulvinar id elit a laoreet. Morbi sollicitudin lectus ut urna consectetur, id suscipit nulla fringilla.Vivamus ac sapien vel urna vehicula dignissim. Suspendisse non tortor eget tortor pellentesque feugiat. Ut in quam libero.
              </p>
            </div>
            <div
              style={{
                width: '40%',
                height: '100%',
                float: 'left',
              }}
            >
              {/* Content for the right box (40%) */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          {/* Heading with padding */}
          <h1 style={{
            paddingTop: '40px',
            paddingLeft: '40px',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
          }}>
            HEADING</h1>
        </div>
        <div>
          {/* ... (Previous content) */}

          {/* Division with clickable boxes */}
          <div style={{ margin: '20px auto', width: '80%', display: 'flex', flexWrap: 'wrap' }}>
            {/* First Row */}
            <div style={boxStyle}>Language Translation</div>
            <div style={boxStyle}>Language Translation</div>
            <div style={boxStyle}>Language Translation</div>

            {/* Second Row */}
            <div style={boxStyle}>Language Translation</div>
            <div style={boxStyle}>Language Translation</div>
            <div style={boxStyle}>Language Translation</div>

            {/* Third Row */}
            <div style={boxStyle}>Language Translation</div>
            <div style={boxStyle}>Language Translation</div>
            <div style={boxStyle}>Language Translation</div>
          </div>
        </div>
      </div>
      <div>
        <h1 style={{
          paddingTop: '20px',
          paddingLeft: '40px',
          color: 'white',
          fontSize: '36px',
          fontWeight: 'bold',
        }}>
          INDUSTRIES WE SERVE</h1>
        <img
          src="/industry.png"
          alt="industry"
          style={{ width: '100px', marginRight: '10px', marginTop: '20px' }}
        />
        <span>Name of Industry</span>
        {/* Add a small image to the right side */}
        <img

          src="./image_next_to_industry.png"
          alt="image_next_to_industry"

          style={{ width: '100px', marginLeft: '900px' }}
        />
      </div>
      <div>
        <h1 style={{
          paddingTop: '20px',
          paddingLeft: '40px',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
        }}>
          Case Studies</h1>
      </div>
      <div style={{ clear: 'both', marginTop: '20px' }}>
        <div style={{ display: 'flex' }}>
          {/* Box with white outline */}
          <div
            style={{
              width: '400px',
              height: '150px',
              border: '1px solid white',
              // flex: '1', // Make the first box take up the available space
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}
          >
            Case Study 1
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Two boxes to the right (stacked vertically) */}
            <div
              style={{
                width: '400px',
                height: '60px',
                backgroundColor: 'transparent',
                border: '1px solid white',
                marginTop: '10px', // Add some margin between the boxes
                marginBottom: '10px', // Add some margin between the boxes
                marginLeft: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Case Study 2
            </div>
            <div
              style={{
                width: '400px',
                height: '60px',
                backgroundColor: 'transparent',
                border: '1px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '10px',
              }}
            >
              Case Study 3
            </div>
          </div>
        </div>
        <div style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h1 style={{
            paddingTop: '20px',
            paddingLeft: '40px',
            color: 'white',
            fontSize: '36px',
            fontWeight: 'bold',
          }}>
            TESTIMONIALS</h1>
          Customer Review
        </div>
        <div>
          <h1 style={{
            paddingTop: '20px',
            paddingLeft: '40px',
            color: 'white',
            fontSize: '36px',
            fontWeight: 'bold',
          }}>
            WHY CHOOSE US</h1>
          <div style={{ marginTop: '20px' }}>
            {/* Container for the three boxes */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              {/* First Box */}
              <div
                style={{
                  marginLeft: '40px', // Add 40px padding to the left side of the first box
                  width: '30%',
                  height: '400px',
                  // backgroundColor: 'lightblue',

                  border: '1px solid #ccc',
                  display: 'flex',
                  cursor: 'pointer',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id est non sapien vehicula consequat. Cras ac semper est. Etiam ac dui id mi ullamcorper bibendum. Fusce non ex ut tortor eleifend dignissim. Phasellus non volutpat augue. Nullam tristique, lectus non fringilla pharetra, purus quam bibendum turpis, eu lacinia augue elit ac quam. Curabitur euismod volutpat odio a vestibulum. Donec euismod purus eu dolor tincidunt, eget tempor justo luctus.
              </div>

              {/* Second Box */}
              <div
                style={{
                  width: '30%',
                  height: '400px',
                  border: '1px solid #ccc',
                  display: 'flex',
                  cursor: 'pointer',
                  marginLeft: '20px', // Add 20px padding between boxes
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id est non sapien vehicula consequat. Cras ac semper est. Etiam ac dui id mi ullamcorper bibendum. Fusce non ex ut tortor eleifend dignissim. Phasellus non volutpat augue. Nullam tristique, lectus non fringilla pharetra, purus quam bibendum turpis, eu lacinia augue elit ac quam. Curabitur euismod volutpat odio a vestibulum. Donec euismod purus eu dolor tincidunt, eget tempor justo luctus.
              </div>

              {/* Third Box */}
              <div
                style={{
                  width: '30%',
                  height: '400px',
                  // backgroundColor: 'lightblue',
                  border: '1px solid #ccc',
                  display: 'flex',

                  cursor: 'pointer',
                  marginLeft: '20px', // Add 20px padding between boxes
                  marginRight: '40px', // Add 40px padding to the left side of the first box
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id est non sapien vehicula consequat. Cras ac semper est. Etiam ac dui id mi ullamcorper bibendum. Fusce non ex ut tortor eleifend dignissim. Phasellus non volutpat augue. Nullam tristique, lectus non fringilla pharetra, purus quam bibendum turpis, eu lacinia augue elit ac quam. Curabitur euismod volutpat odio a vestibulum. Donec euismod purus eu dolor tincidunt, eget tempor justo luctus.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Container for the image, text, and button */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Image */}
          <div style={{ position: 'relative', width: '400px', height: '400px' }}>
            <img
              src="/your-image.jpg" // Replace with the actual image URL
              alt="Image"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {/* Text overlay */}
            <div
              style={{
                position: 'absolute',
                top: '50%', // Adjust to center vertically
                left: '50%', // Adjust to center horizontally
                transform: 'translate(-50%, -50%)', // Center both vertically and horizontally
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
                padding: '10px',
                borderRadius: '5px',
              }}
            >
              IMAGE WITH TEXT ON IT
            </div>
          </div>

          {/* "Know More" button */}
          <button
            style={{
              marginLeft: '20px', // Add spacing between the image and button
              padding: '10px 20px',
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Know More
          </button>
        </div>
      </div>
      {/* Create a banner with width 100%, height 60vh, on the left side */}
      <div
        style={{
          width: '100%', // Adjust the width as needed
          height: '45vh',
          backgroundColor: 'transparent',
          border: '1px solid white',
          display: 'flex', // Make the content and form display side by side
          alignItems: 'center', // Center the content vertically
          justifyContent: 'space-between', // Create space between the content and form
          padding: '10px', // Add padding for spacing
        }}
      >
        {/* Content paragraph on the left */}
        <p
          style={{
            color: 'white',
            fontSize: '14px',
            marginRight: '20px', // Adjust the margin as needed
            flex: '70%', // Adjust the flex value for the content width
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id est non sapien vehicula consequat. Cras ac semper est. Etiam ac dui id mi ullamcorper bibendum. Fusce non ex ut tortor eleifend dignissim. Phasellus non volutpat augue. Nullam tristique, lectus non fringilla pharetra, purus quam bibendum turpis, eu lacinia augue elit ac quam. Curabitur euismod volutpat odio a vestibulum. Donec euismod purus eu dolor tincidunt, eget tempor justo luctus.
        </p>

        {/* Query form on the right */}
        <form onSubmit={handleSubmit}
          style={{
            flex: '30%', // Adjust the flex value for the form width
          }}
        >
          {/* Add your form fields here */}
          <div style={{ marginBottom: '10px', display: 'block' }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" style={{ width: '100%', padding: '10px', color: 'black' }} />
          </div>
          <div style={{ marginBottom: '10px', display: 'block' }}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" style={{ width: '100%', padding: '10px' , color: 'black'}} />
          </div>
          <div style={{ marginBottom: '10px', display: 'block' }}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" style={{ width: '100%', padding: '10px', color: 'black' }}></textarea>
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px' }}>Submit</button>
        </form>
      </div>
    </div>
  );
}
