

export const useUtils = () => {
     const getResultCardImage = (catg: string) => {
        if (catg === "SD") return "lightCard.png";
        if (catg === "Admin") return "darkCard.png";
        else return "lightCard2.png";
      };

       const GACustomEvent = (category: string, action: string) => {
     
      };
    return {
        getResultCardImage,
        GACustomEvent
    }
}