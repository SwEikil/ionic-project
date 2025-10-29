import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

interface Highlight {
  label: string;
  icon: string;
}

interface AdoptableCat {
  name: string;
  age: string;
  personality: string;
  image: string;
  tags: string[];
  accent: string;
}

interface WellnessTip {
  title: string;
  description: string;
  icon: string;
}

interface CommunityEvent {
  title: string;
  date: string;
  location: string;
  detail: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonChip,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonRow,
    IonTitle,
    IonToolbar
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Highlight chips introduce the main sections // Чіпи-підказки знайомлять з ключовими розділами
  protected readonly heroHighlights: Highlight[] = [
    { label: 'Adopt a friend', icon: 'heart' },
    { label: 'Care guides', icon: 'leaf' },
    { label: 'Stories & tips', icon: 'book' }
  ];

  // Featured cats with quick personality tags // Представлені котики з короткими рисами характеру
  protected readonly adoptableCats: AdoptableCat[] = [
    {
      name: 'Mila',
      age: '2 y/o',
      personality: 'Playful cuddle expert looking for an active home.',
      image: 'https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg',
      tags: ['Loves toys', 'Great with kids'],
      accent: 'var(--ion-color-primary)'
    },
    {
      name: 'Baron',
      age: '4 y/o',
      personality: 'Elegant gentleman who enjoys quiet window views.',
      image: 'https://paws.org.ph/wp-content/uploads/2025/10/Keri--1024x892.jpeg',
      tags: ['Calm', 'Indoor pro'],
      accent: 'var(--ion-color-tertiary)'
    },
    {
      name: 'Zefir',
      age: '1 y/o',
      personality: 'Curious explorer ready for the next adventure.',
      image: 'https://schertzanimalhospital.com/wp-content/uploads/2017/12/Schertz_iStock-590055188-1024x682.jpg',
      tags: ['Curious', 'Clicker-ready'],
      accent: 'var(--ion-color-success)'
    }
  ];

  // Wellness tips keep owners confident // Поради з догляду додають впевненості власникам
  protected readonly wellnessTips: WellnessTip[] = [
    {
      title: 'Build a calm routine',
      description: 'Feed, play, and rest at the same time daily to reduce stress.',
      icon: 'alarm'
    },
    {
      title: 'Vet-ready checklists',
      description: 'Keep vaccination and nutrition notes in one tidy folder.',
      icon: 'clipboard'
    },
    {
      title: 'Interactive playtime',
      description: 'Rotate toys weekly to spark curiosity and healthy exercise.',
      icon: 'flash'
    }
  ];

  // Local community block connects cat lovers // Блок спільноти єднає любителів котів
  protected readonly communityEvents: CommunityEvent[] = [
    {
      title: 'Adoption Weekend',
      date: 'Nov 15–16',
      location: 'Oslo Cat Lounge',
      detail: 'Meet 20+ rescues, learn fjord-inspired enrichment ideas, and sip catpuccinos.'
    },
    {
      title: 'Care Masterclass',
      date: 'Dec 3',
      location: 'Bergen Cozy Pets Hub',
      detail: 'Learn senior-cat stretching routines with our volunteer veterinarians.'
    }
  ];
}
