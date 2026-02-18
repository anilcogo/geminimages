import coupleImg from "@/assets/prompts/couple-1.jpg";
import headshotImg from "@/assets/prompts/headshot-1.jpg";
import carImg from "@/assets/prompts/car-lifestyle-1.jpg";
import fashionImg from "@/assets/prompts/fashion-1.jpg";
import cinematicImg from "@/assets/prompts/cinematic-1.jpg";
import travelImg from "@/assets/prompts/travel-1.jpg";
import businessImg from "@/assets/prompts/business-1.jpg";
import artisticImg from "@/assets/prompts/artistic-1.jpg";

export type Category =
  | "Couple"
  | "Headshots"
  | "Car Lifestyle"
  | "Fashion"
  | "Cinematic"
  | "Travel"
  | "Business"
  | "Artistic";

export interface Prompt {
  id: string;
  title: string;
  category: Category;
  image: string;
  prompt: string;
}

export const categories: { name: Category; icon: string; description: string }[] = [
  { name: "Couple", icon: "❤️", description: "Romantic couple photo prompts" },
  { name: "Headshots", icon: "👤", description: "Professional headshot prompts" },
  { name: "Car Lifestyle", icon: "🚗", description: "Car & lifestyle photo prompts" },
  { name: "Fashion", icon: "👗", description: "Fashion editorial prompts" },
  { name: "Cinematic", icon: "🎬", description: "Cinematic scene prompts" },
  { name: "Travel", icon: "✈️", description: "Travel photography prompts" },
  { name: "Business", icon: "💼", description: "Corporate & business prompts" },
  { name: "Artistic", icon: "🎨", description: "Creative artistic prompts" },
];

export const prompts: Prompt[] = [
  {
    id: "1",
    title: "Golden Hour Couple Walk",
    category: "Couple",
    image: coupleImg,
    prompt: "Generate a romantic photo of a couple walking hand in hand through a beautiful flower garden during golden hour. Warm soft light, shallow depth of field, bokeh background, lifestyle photography style. The couple is dressed casually and smiling at each other. Shot on 85mm lens, f/1.8.",
  },
  {
    id: "2",
    title: "Professional LinkedIn Headshot",
    category: "Headshots",
    image: headshotImg,
    prompt: "Create a professional corporate headshot of a confident person in a tailored navy suit. Clean studio background with soft gradient lighting. Sharp focus on face, slight smile, direct eye contact. Perfect for LinkedIn profile. Shot on medium format camera with studio strobe lighting.",
  },
  {
    id: "3",
    title: "Luxury Car Duo Pose",
    category: "Car Lifestyle",
    image: carImg,
    prompt: "Generate a stylish photo of a young man and woman posing confidently in front of a luxury sports car in an urban city setting. Dramatic evening lighting, cinematic color grading with teal and orange tones. Fashion-forward outfits, powerful stance. Shot on 35mm lens, wide angle.",
  },
  {
    id: "4",
    title: "Editorial Fashion Portrait",
    category: "Fashion",
    image: fashionImg,
    prompt: "Create a high fashion editorial portrait with dramatic colored gel lighting (blue and red). Model wearing elegant couture clothing, artistic composition with bold shadows. Magazine cover quality, shot in professional studio with Profoto lighting setup.",
  },
  {
    id: "5",
    title: "Cliff Silhouette Shot",
    category: "Cinematic",
    image: cinematicImg,
    prompt: "Generate a cinematic wide shot of a lone figure standing on a dramatic cliff edge overlooking vast mountain landscape. Moody atmosphere with fog and god rays breaking through clouds. Film grain texture, anamorphic lens flare. Color graded like a Christopher Nolan film.",
  },
  {
    id: "6",
    title: "Santorini Wanderlust",
    category: "Travel",
    image: travelImg,
    prompt: "Create a stunning travel photograph of a person in a flowing red dress walking through the colorful streets of Santorini, Greece. Blue domed churches and white-washed buildings in background. Bright sunny day, vibrant colors, wanderlust aesthetic. Shot on Sony A7III.",
  },
  {
    id: "7",
    title: "Corporate Team Meeting",
    category: "Business",
    image: businessImg,
    prompt: "Generate a professional corporate photo of a diverse business team in a modern glass office during a collaborative meeting. Natural window light, clean and professional atmosphere. Genuine engagement and discussion. Perfect for corporate website or LinkedIn company page.",
  },
  {
    id: "8",
    title: "Neon Paint Splash Portrait",
    category: "Artistic",
    image: artisticImg,
    prompt: "Create an abstract artistic portrait with vibrant paint splashes and neon light effects. Creative double exposure blending a human face with colorful paint drops. Surreal digital art style with bold magenta, cyan, and orange colors on a dark background. Ultra detailed.",
  },
  {
    id: "9",
    title: "Sunset Beach Couple",
    category: "Couple",
    image: coupleImg,
    prompt: "Generate a dreamy beach sunset photo of a couple silhouetted against an orange and pink sky. Waves gently lapping at their feet, reflections on wet sand. Romantic mood, shot from a low angle with a wide lens. Golden hour warmth with lens flare.",
  },
  {
    id: "10",
    title: "Creative Studio Headshot",
    category: "Headshots",
    image: headshotImg,
    prompt: "Create a modern creative headshot with dramatic side lighting and a dark moody background. Subject looking slightly off-camera with a thoughtful expression. Perfect for actors, musicians, or creative professionals. Rembrandt lighting style.",
  },
  {
    id: "11",
    title: "Night City Car Scene",
    category: "Car Lifestyle",
    image: carImg,
    prompt: "Generate a nighttime urban car photography scene. Neon city lights reflecting on the wet road. A sleek sports car parked under a bridge with LED underglow. Cyberpunk aesthetic with purple and blue tones. Long exposure light trails in background.",
  },
  {
    id: "12",
    title: "Mountain Adventure Travel",
    category: "Travel",
    image: travelImg,
    prompt: "Create an epic travel photograph of a backpacker standing at a mountain summit overlooking a valley filled with clouds below. Early morning golden light, dramatic landscape. Adventure and exploration mood. Shot with ultra-wide 14mm lens.",
  },
];
