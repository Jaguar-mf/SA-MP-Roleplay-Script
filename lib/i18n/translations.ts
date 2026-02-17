export type Language = "en" | "fr" | "ar"

export const translations = {
  en: {
    // Navigation
    languageName: "English",

    // Home Page
    home: {
      title: "Thank You",
      candidate: "Dr. Aymane Ouhassoun",
      thesisTitle: "I want to extend my deepest gratitude to everyone who attended my thesis defense. Your presence meant so much more than you might realize. The courage and support you showed gave me the strength to stand confidently before the jury and share my work. This academic milestone would not have been possible without your encouragement and belief in me. Thank you for being part of this important chapter of my journey. Your attendance has inspired me to continue pushing forward and pursuing even greater goals. I am truly grateful for each and every one of you.",
      parentsTitle: "Most importantly, I want to express my infinite gratitude to my parents, Bahija, Fatih, and Abdellah Ouhassoun. Your unwavering love, endless encouragement, and selfless sacrifices have been the foundation of everything I've achieved. You believed in me even when I doubted myself. This degree is as much yours as it is mine. I dedicate this accomplishment to you with all my love and deepest appreciation.",
      quote: "Success is not final, failure is not fatal. It is the courage to continue that counts.",
      quoteAuthor: "— Winston Churchill",
      whenTitle: "When",
      whenDescription: "The exact date and time will be communicated through your personalized invitation",
      whereTitle: "Where",
      location: "Faculty of Legal, Economic and Social Sciences",
      city: "AIN CHOCK, Casablanca",
      aboutTitle: "About the Research",
      aboutDescription:
        "This doctoral research explores the critical relationship between knowledge management and employee performance within Moroccan universities. The study examines how effective knowledge management practices can enhance organizational performance and contribute to academic excellence in higher education institutions.",
      ctaTitle: "Have an Invitation?",
      ctaDescription:
        "If you received a personalized invitation link, click it to view all the details specific to your invitation",
      adminAccess: "Admin Access",
      footerTitle: "PhD Thesis Defense - Aymane Ouhassoun",
      footerCopyright: "All rights reserved",
    },

    // Invitation Page
    invitation: {
      youreInvited: "You're Invited",
      dear: "Dear",
      invitationText: "You are cordially invited to attend the defense of my doctoral thesis",
      candidateLabel: "PhD Candidate",
      thesisTitleLabel: "Thesis Title",
      dateLabel: "Date",
      timeLabel: "Time",
      toBeAnnounced: "To be announced",
      locationLabel: "Location",
      venue: "Faculty of Legal, Economic and Social Sciences",
      address: "AIN CHOCK, Casablanca, Morocco",
      importantInfo: "Important Information",
      dresscode: "Dresscode",
      dresscodeValue: "Business formal / Academic attire",
      duration: "Expected Duration",
      durationValue: "Approximately 2-3 hours",
      rsvpLabel: "RSVP",
      rsvpValue: "Please confirm your attendance",
    },

    // Admin Pages
    admin: {
      loginTitle: "Admin Login",
      loginDescription: "Thesis Defense Management Portal",
      email: "Email",
      password: "Password",
      signIn: "Sign in",
      signingIn: "Signing in...",
      dashboard: "Dashboard",
      dashboardDescription: "Manage your thesis defense invitations and settings",
      logout: "Logout",

      // Thesis Settings
      thesisSettings: "Thesis Settings",
      defenseDate: "Defense Date",
      defenseTime: "Defense Time",
      saveSettings: "Save Settings",
      savingSettings: "Saving...",
      settingsSaved: "Settings saved successfully",

      // Invitations
      invitationsTitle: "Invitations",
      invitationsDescription: "Create and manage personalized invitations for your guests",
      createInvitation: "Create Invitation",
      guestName: "Guest Name",
      enterGuestName: "Enter guest name",
      creating: "Creating...",
      invitationCreated: "Invitation created successfully",
      uniqueLink: "Unique Link",
      copyLink: "Copy Link",
      linkCopied: "Link copied!",
      deleteInvitation: "Delete",
      confirmDelete: "Are you sure you want to delete this invitation?",
      cancel: "Cancel",
      delete: "Delete",
    },
  },

  fr: {
    // Navigation
    languageName: "Français",

    // Home Page
    home: {
      title: "Merci",
      candidate: "Dr. Aymane Ouhassoun",
      thesisTitle:
        "Je souhaite exprimer ma plus profonde gratitude à tous ceux qui ont assisté à la soutenance de ma thèse. Votre présence a signifié beaucoup plus que vous ne pouvez l'imaginer. Le courage et le soutien que vous m'avez apportés m'ont donné la force de me tenir avec confiance devant le jury et de partager mon travail. Cette étape académique n'aurait pas été possible sans votre encouragement et votre confiance en moi. Merci de faire partie de ce chapitre important de mon parcours. Votre présence m'a inspiré à continuer d'avancer et à poursuivre des objectifs encore plus grands. Je suis infiniment reconnaissant à chacun d'entre vous.",
      parentsTitle: "Plus important encore, je veux exprimer ma gratitude infinie à mes parents, Bahija, Fatih et Abdellah Ouhassoun. Votre amour indéfectible, votre encouragement sans fin et vos sacrifices désintéressés ont été la fondation de tout ce que j'ai réussi. Vous aviez confiance en moi même quand je doutais de moi. Ce diplôme est autant le vôtre que le mien. Je dédie cette réussite à vous avec tout mon amour et ma plus profonde reconnaissance.",
      quote: "La réussite n'est pas définitive, l'échec n'est pas fatal. C'est le courage de continuer qui compte.",
      quoteAuthor: "— Winston Churchill",
      whenTitle: "Quand",
      whenDescription: "La date et l'heure exactes seront communiquées via votre invitation personnalisée",
      whereTitle: "Où",
      location: "Faculté des sciences juridiques, économiques et sociales",
      city: "AIN CHOCK, Casablanca",
      aboutTitle: "À propos de la Recherche",
      aboutDescription:
        "Cette recherche doctorale explore la relation critique entre la gestion des connaissances et la performance des employés au sein des universités marocaines. L'étude examine comment des pratiques efficaces de gestion des connaissances peuvent améliorer la performance organisationnelle et contribuer à l'excellence académique dans les établissements d'enseignement supérieur.",
      ctaTitle: "Vous avez une invitation ?",
      ctaDescription:
        "Si vous avez reçu un lien d'invitation personnalisé, cliquez dessus pour voir tous les détails spécifiques à votre invitation",
      adminAccess: "Accès Administrateur",
      footerTitle: "Soutenance de Thèse de Doctorat - Aymane Ouhassoun",
      footerCopyright: "Tous droits réservés",
    },

    // Invitation Page
    invitation: {
      youreInvited: "Vous êtes invité(e)",
      dear: "Cher(e)",
      invitationText: "Vous êtes cordialement invité(e) à assister à la soutenance de ma thèse de doctorat",
      candidateLabel: "Doctorant",
      thesisTitleLabel: "Titre de la Thèse",
      dateLabel: "Date",
      timeLabel: "Heure",
      toBeAnnounced: "À annoncer",
      locationLabel: "Lieu",
      venue: "Faculté des sciences juridiques, économiques et sociales",
      address: "AIN CHOCK, Casablanca, Maroc",
      importantInfo: "Informations Importantes",
      dresscode: "Code vestimentaire",
      dresscodeValue: "Formel professionnel / Tenue académique",
      duration: "Durée Prévue",
      durationValue: "Environ 2-3 heures",
      rsvpLabel: "RSVP",
      rsvpValue: "Veuillez confirmer votre présence",
    },

    // Admin Pages
    admin: {
      loginTitle: "Connexion Administrateur",
      loginDescription: "Portail de Gestion de Soutenance de Thèse",
      email: "Email",
      password: "Mot de passe",
      signIn: "Se connecter",
      signingIn: "Connexion...",
      dashboard: "Tableau de bord",
      dashboardDescription: "Gérez vos invitations et paramètres de soutenance de thèse",
      logout: "Déconnexion",

      // Thesis Settings
      thesisSettings: "Paramètres de la Thèse",
      defenseDate: "Date de Soutenance",
      defenseTime: "Heure de Soutenance",
      saveSettings: "Enregistrer",
      savingSettings: "Enregistrement...",
      settingsSaved: "Paramètres enregistrés avec succès",

      // Invitations
      invitationsTitle: "Invitations",
      invitationsDescription: "Créez et gérez les invitations personnalisées pour vos invités",
      createInvitation: "Créer une Invitation",
      guestName: "Nom de l'invité",
      enterGuestName: "Entrez le nom de l'invité",
      creating: "Création...",
      invitationCreated: "Invitation créée avec succès",
      uniqueLink: "Lien Unique",
      copyLink: "Copier le lien",
      linkCopied: "Lien copié !",
      deleteInvitation: "Supprimer",
      confirmDelete: "Êtes-vous sûr de vouloir supprimer cette invitation ?",
      cancel: "Annuler",
      delete: "Supprimer",
    },
  },

  ar: {
    // Navigation
    languageName: "العربية",

    // Home Page
    home: {
      title: "شكراً لك",
      candidate: "د. أيمن أوحسون",
      thesisTitle: "أود أن أعرب عن أعمق امتناني لكل من حضروا مناقشة أطروحتي. كان حضوركم له معنى أكثر بكثير مما قد تتخيلوه. أعطتني الشجاعة والدعم الذي قدمتموه القوة للوقوف بثقة أمام لجنة التحكيم ومشاركة عملي. لم يكن هذا الإنجاز الأكاديمي ممكناً بدون تشجيعكم وإيمانكم بي. شكراً لكونكم جزءاً من هذا الفصل المهم من رحلتي. لقد ألهمني حضوركم لمتابعة المسيرة والعمل على تحقيق أهداف أكبر. أنا ممتن بشكل لا نهائي لكل واحد منكم.",
      parentsTitle: "والأهم من ذلك، أود التعبير عن امتناني اللانهائي لوالدي، بهيجة وفاتح وعبد الله أوحسون. حبكم الثابت وتشجيعكم المستمر وتضحياتكم الجاهزة كانت أساس كل ما حققته. آمنتم بي حتى عندما كنت أشك في نفسي. هذه الدرجة العلمية هي لكما مثلما هي لي. أهدي هذا الإنجاز إليكما بكل حبي وتقديري الأعمق.",
      quote: "النجاح ليس نهائياً، والفشل ليس قاتلاً. إنها الشجاعة للمتابعة هي ما يهم.",
      quoteAuthor: "— ونستون تشرشل",
      whenTitle: "متى",
      whenDescription: "سيتم الإبلاغ عن التاريخ والوقت المحددين من خلال دعوتك الشخصية",
      whereTitle: "أين",
      location: "كلية العلوم القانونية والاقتصادية والاجتماعية",
      city: "عين الشق، الدار البيضاء",
      aboutTitle: "حول البحث",
      aboutDescription:
        "يستكشف هذا البحث الدكتوراه العلاقة الحاسمة بين إدارة المعرفة وأداء الموظفين داخل الجامعات المغربية. تدرس الدراسة كيف يمكن لممارسات إدارة المعرفة الفعالة تعزيز الأداء التنظيمي والمساهمة في التميز الأكاديمي في مؤسسات التعليم العالي.",
      ctaTitle: "هل لديك دعوة؟",
      ctaDescription: "إذا تلقيت رابط دعوة شخصية، انقر عليه لعرض جميع التفاصيل الخاصة بدعوتك",
      adminAccess: "دخول المسؤول",
      footerTitle: "مناقشة أطروحة الدكتوراه - أيمن أوحسون",
      footerCopyright: "جميع الحقوق محفوظة",
    },

    // Invitation Page
    invitation: {
      youreInvited: "أنت مدعو",
      dear: "عزيزي/عزيزتي",
      invitationText: "يشرفنا دعوتكم لحضور مناقشة أطروحة الدكتوراه الخاصة بي",
      candidateLabel: "طالب الدكتوراه",
      thesisTitleLabel: "عنوان الأطروحة",
      dateLabel: "التاريخ",
      timeLabel: "الوقت",
      toBeAnnounced: "سيتم الإعلان عنه",
      locationLabel: "المكان",
      venue: "كلية العلوم القانونية والاقتصادية والاجتماعية",
      address: "عين الشق، الدار البيضاء، المغرب",
      importantInfo: "معلومات مهمة",
      dresscode: "قواعد اللباس",
      dresscodeValue: "رسمي / زي أكاديمي",
      duration: "المدة المتوقعة",
      durationValue: "حوالي 2-3 ساعات",
      rsvpLabel: "تأكيد الحضور",
      rsvpValue: "يرجى تأكيد حضورك",
    },

    // Admin Pages
    admin: {
      loginTitle: "تسجيل دخول المسؤول",
      loginDescription: "بوابة إدارة مناقشة الأطروحة",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      signIn: "تسجيل الدخول",
      signingIn: "جاري تسجيل الدخول...",
      dashboard: "لوحة التحكم",
      dashboardDescription: "إدارة الدعوات وإعدادات مناقشة الأطروحة",
      logout: "تسجيل الخروج",

      // Thesis Settings
      thesisSettings: "إعدادات الأطروحة",
      defenseDate: "تاريخ المناقشة",
      defenseTime: "وقت المناقشة",
      saveSettings: "حفظ الإعدادات",
      savingSettings: "جاري الحفظ...",
      settingsSaved: "تم حفظ الإعدادات بنجاح",

      // Invitations
      invitationsTitle: "الدعوات",
      invitationsDescription: "إنشاء وإدارة الدعوات الشخصية للضيوف",
      createInvitation: "إنشاء دعوة",
      guestName: "اسم الضيف",
      enterGuestName: "أدخل اسم الضيف",
      creating: "جاري الإنشاء...",
      invitationCreated: "تم إنشاء الدعوة بنجاح",
      uniqueLink: "رابط فريد",
      copyLink: "نسخ الرابط",
      linkCopied: "تم نسخ الرابط!",
      deleteInvitation: "حذف",
      confirmDelete: "هل أنت متأكد من حذف هذه الدعوة؟",
      cancel: "إلغاء",
      delete: "حذف",
    },
  },
} as const

export type TranslationKeys = typeof translations.en
