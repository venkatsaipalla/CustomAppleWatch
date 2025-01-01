## Live Link : https://venkat-apple-studio.vercel.app/

# Apple Watch Studio

Apple Watch Studio is a dynamic web application that allows users to customize and explore Apple Watch bands and cases through an interactive carousel. The project is built using React and integrates features like dynamic data rendering, conditional Swiper carousels, and user-centric design to enhance the customization experience.

## Features

- **Dynamic Customization:** Users can select different bands and cases to visualize their preferences.
- **Interactive Swiper Carousel:** Displays bands and cases with centered slides for a seamless browsing experience.
- **Real-Time State Management:** Tracks user-selected options and updates UI dynamically.
- **Responsive Design:** Ensures optimal experience across devices.
- **Save Selected Watch :** Redirected to apple site for the selected watch face/band etc.

## Tech Stack

- **Frontend:** React, TypeScript
- **UI Library:** Swiper.js for carousels
- **State Management:** React hooks (`useState`, `useEffect`)
- **Swiper Side Mangement:** React Ref (`useRef`)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/apple-watch-studio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd apple-watch-studio
   ```

3. Install dependencies:

   ```bash
   npm install --legacy-peer-deps
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## File Structure

```
apple-watch-studio/
├── src/
│   ├── commonConstants/
│   │   ├── constanst.tsx  // Handles the common constans
│   ├── components/
│   │   ├── HomePage.tsx  // main component
│   │   ├── AppleWatchCustomizeOptions.tsx   // Component for to show customization options
│   │   ├── Header.tsx   // Component for Header
│   │   ├── HomePageStyles.module.css   // Styles for the home page
│   ├── hooks/
│   │   ├── useDeviceSize.ts   // customhook used to get device size dynamically
│   ├── styles/
│   │   ├── HomePageStyles.module.css   // Styles for the home page
│   ├── App.tsx   // Main application file
├── public/
│   ├── images/   // Static assets like band and case images
├── README.md     // Documentation
```

## Usage

### Customizing Watch Bands

1. Select the "Bands" option from the menu.
2. Use the carousel to browse through available bands.
3. Click on a band to select it; the selected band will be highlighted.

### Customizing Watch Cases

1. Select the "Cases" option from the menu.
2. Use the carousel to browse through available cases.
3. Click on a case to select it; the selected case will be highlighted.

## Key Functions

### `getInitialSlideIndex`

Determines the initial slide index for the Swiper component based on the user's selection.

```typescript
 const getInitialSlideIndex = (
    selectedModel: string,
    collection: {
      bandModel?: string;
      watchFaceModel?: string;
      watchFaceCaseModel?: string;
    }[]
  ) => {
    const index = collection.findIndex(
      (item) =>
        item.bandModel === selectedModel ||
        item.watchFaceModel === selectedModel ||
        item.watchFaceCaseModel === selectedModel
    );
    console.log({ selectedModel, index });

    return index !== -1 ? index : 0; // Default to 0 if not found
  };
```

### Dynamic Rendering

The Swiper component dynamically updates based on the selected customization option (`Bands` or `Cases`).


## Future Enhancements

- Collection Type Change.
- Integrate a backend API for real-time data.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Swiper.js** for the interactive carousel.
- **React Community** for extensive documentation and support.

## Complexity and Huddle 
- **Asset Management** Different watchFaces for different Watch Bands 

Here is the corrected version:

**Wow Factors I Achieved (in 3 days):**  
1. Smooth transition effect of the watch on clicking the "Get Started" button.  
2. Custom swipe-slide component that takes a list of bands/watch cases and renders the images.  
3. Centered/active slide automatically navigates to the particular slide based on the selected band or watch case.  
4. Smooth transition effect on opening and closing the "Customize" options (size, case, band).  
5. Based on the selected band/watch face, on clicking "Save" redirects to the purchase link for the particular watch type on apple.com.  
6. Custom arrows to swipe left and right and their functionality.  
7. Responsive on mobile (iPhone) and laptop.  
8. Handled the change of watch faces based on the band color/type when the user swipes through the bands.  

**Things Left Due to Time Constraints:**  
1. UI update for changing the collection type and displaying the corresponding images (assets) is pending.  
2. Size change functionality (46mm, 44mm) is pending.  
3. Minor adjustments for responsiveness on other devices.  
