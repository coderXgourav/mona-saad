import 'server-only'; 
import { Locale } from './i18n-config';
 
export interface Dictionary {
  navbar: {
    home: string;
    services: string;
    about_us: string;
    blogs: string;
    contact_us: string;
    book_now: string;
    gallery: string; 
    news: string;
    female_cosmetic: string;
    rare_conditions: string;
  };
  home: {
    hero: {
      helper_text: string;
      dr_mona: string;
      second_helper_text: string;
      book_an_appointment: string;
      our_schedule: string;
      who_we_are: string;
      your_journey: string;
      at_kliniku: string;
      happy_patients: string;
      patients_count: string;
      clinics: string;
      clinics_count: string;
      certificates: string ;
      in_surgeries: string;
      years: string;
      of_experience: string;
    };
    offers: {
      our_services: string;
      what_we_offer: string;
      surgeries: string;
      surgeries_description: string;
      care: string;
      care_description: string;
      professional: string;
      professional_description: string;
    };
    about: {
      about_dr_mona: string;
      title: string;
      description: string;
      our_approach: {
        title: string;
        list: {
          one: string;
          two: string;
          three: string;
        };
      };
      our_values: {
        title: string;
        list: {
          one: string;
          two: string;
          three: string;
          four: string;
          five: string;
        };
      };
    };
    testimonial: {
      testimonial: string;
      happy_patients: string;
      description: string;
      message_one: string;
      reviewer_one: string;
      reviewer_title: string;
      message_five: string;
      reviewer_five: string;
      message_two: string;
      reviewer_two: string;
      message_four: string;
      reviewer_four: string;
      message_three: string;
      reviewer_three: string;
    };
    get_in_touch: {
      contact_us: string;
      get_in_touch: string;
      description: string;
      email: string;
      phone: string;
      number: string;
      clinic: string;
      location: string;
    };
  };
  footer: {
    home: string;
    services: string;
    about_us: string;
    blogs: string;
    contact_us: string;
    locations: string;
    location_one: string;
    number: string;
    clinic: string;
    copyright: string;
  };
  breadcrumb: {
    home: string;
    about_us: string;
    contact_us: string;
    blogs: string;
    services: string;
    painless_delivery: string;
    cosmotices: string;
    laparoscopic_surgery: string;
    oncology_surgery:string;
    botox: string;
    high_risk: string;
    gallery: string;
    news: string;
    female_cosmetic: string;
    rare_conditions: string;
    rare_birth_of_no_identical_triplets: string;
  };
  about: {
    about_one: {
      small_title: string;
      title: string;
      description_one: string;
      description_two: string;
      description_three: string;
      book_an_appointment: string;
      dr_mona_saad: string;
    };
    about_two: {
      small_title: string;
      title: string;
      description: string;
      contact_us: string;
      dr_mona_saad: string;
    };
    about_three: {
      small_title: string;
      title: string;
      description: string;
      book_an_appointment: string;
      dr_mona_saad: string;
    };
  };
  contact_us: {
    contact_us: string;
    form_title: string;
    your_name: string;
    enter_your_email: string;
    enter_your_message: string;
    send: string;
    phone: string;
    email: string;
    address: string;
    number: string;
    address_description: string;
    our_schedule: string;
    working_hours: string;
    saturday: string;
    sunday: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    one_pm: string;
    nine_pm: string;
    twelve_pm: string;
    six_pm: string;
    nine_am: string;
    five_pm:string;
  };
  blogs: {
    written_by:string,
    latest_blogs: string;
    view_more: string
    dr_mona: string;
  }
  services: {
    what_are_you: string;
    we_are_waiting: string;
    book_an_appointment: string;
    painless_delivery: string,
    painless_delivery_description: string;
    cosmotics: string;
    cosmotics_description: string;
    laparoscopic_surgery: string;
    laparoscopic_surgery_description: string;
    oncology_surgery: string;
    oncology_surgery_description: string;
    botox: string;
    botox_description: string;
    high_risk: string;
    high_risk_description: string;
    learn_more: string;
    painless_delivery_details: {
      title_one: string;
      description_one: string;
      title_two: string;
      description_two: {
        one: string;
        two: string;
        three: string;
      };
      title_three: string;
      description_three: string;
      title_four: string;
      description_four: string;
      title_five: string;
      description_five: string;
      title_six: string;
      description_six: string;
    };
    cosmotics_details: {
      title_one: string;
      description_one: string;
      title_two: string;
      description_two: string;
      title_three: string;
      description_three: string;
      title_four: string;
      description_four: string;
      title_five: string;
      description_five: string;
      title_six: string;
      description_six: string;
      title_seven: string;
      description_seven: string;
      title_eight: string;
      description_eight: {
        one: string;
        two: string;
        three: string;
        four: string;
      };
      title_nine: string;
    };
    laparoscopic_surgery_details: {
      title_one: string;
      description_one: string;
      title_two: string;
      description_two: {
        one: string;
        two: string;
        three: string;
      };
      title_three: string;
      description_three: {
        one: string;
        two: string;
        three: string;
        four: string;
      };
      title_four: string;
      description_four: string;
    };
    oncology_surgery_details: {
      title_one: string;
      description_one: string;
      title_two: string;
      description_two: {
        one: string;
        two: string;
        three: string;
      };
      title_three: string;
      description_three: {
        one: string;
        two: string;
        three: string;
        four: string;
        five: string;
      };
      title_four: string;
      description_four: string;
    };
    botox_details: {
      title_one: string;
      description_one: string;
      title_two: string;
      description_two: {
        one: string;
        two: string;
        three: string;
      };
      title_three: string;
      description_three: {
        one: string;
        two: string;
        three: string;
      };
      title_four: string;
      description_four: string;
      title_five: string;
      description_six: string;
    };
    high_risk_pregnancy_details: {
      title_one: string;
      description_one: string;
      title_two: string;
      description_two: {
        one: string;
        two: string;
        three: string;
        four: string;
      };
      title_three: string;
      description_three: {
        one: string;
        two: string;
        three: string;
        four: string;
      };
      title_four: string;
      description_four: {
        one: string;
        two: string;
        three: string;
        four: string;
      };
      title_five: string;
      description_five: string;
    }
    
  }
  gallery : {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
    six: string;
    seven: string;
    eight: string;
    seven_details: string;
    seven_details_one: string;
    seven_details_two: string;
    seven_details_three: string;
    seven_details_four: string;
    seven_deatils_five: string;
    seven_details_link: string;
    nine: string;
  };
  cosmetics: {
    cut: string;
  }
  rare: {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
    rare_case: string;
  }
}




const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('./public/dictionaries/en.json').then((module) => module.default),
  ar: () => import('./public/dictionaries/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();