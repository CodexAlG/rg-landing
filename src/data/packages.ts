export type Equipment = {
  bajos: number;
  bocinas: number;
  luces: number;
  humo: boolean;
  teknobanda: boolean;
};

export type Package = {
  id: string;
  name: string;
  description: string;
  equipment: Equipment;
  isFeatured: boolean;
  whatsappMessage: string;
};

export type Category = {
  id: string;
  name: string;
  packages: Package[];
};

export const categories: Category[] = [
  {
    id: 'musica-programada',
    name: 'Música Programada',
    packages: [
      {
        id: 'mp-1',
        name: 'Paquete 1',
        description: 'Ideal para reuniones y eventos pequeños.',
        equipment: { bajos: 1, bocinas: 2, luces: 4, humo: false, teknobanda: false },
        isFeatured: false,
        whatsappMessage: 'Hola, me interesa el Paquete 1 de Música Programada.',
      },
      {
        id: 'mp-2',
        name: 'Paquete 2',
        description: 'Ideal para fiestas privadas y eventos medianos.',
        equipment: { bajos: 2, bocinas: 3, luces: 8, humo: false, teknobanda: false },
        isFeatured: true,
        whatsappMessage: 'Hola, me interesa el Paquete 2 de Música Programada.',
      },
      {
        id: 'mp-3',
        name: 'Paquete 3',
        description: 'Para eventos grandes que exigen el máximo impacto.',
        equipment: { bajos: 3, bocinas: 4, luces: 16, humo: true, teknobanda: false },
        isFeatured: false,
        whatsappMessage: 'Hola, me interesa el Paquete 3 de Música Programada.',
      },
    ],
  },
  {
    id: 'teknobanda',
    name: 'Teknobanda',
    packages: [
      {
        id: 'tb-1',
        name: 'Paquete 1',
        description: 'Ideal para reuniones y eventos pequeños con banda en vivo.',
        equipment: { bajos: 1, bocinas: 2, luces: 4, humo: false, teknobanda: true },
        isFeatured: false,
        whatsappMessage: 'Hola, me interesa el Paquete 1 de Teknobanda.',
      },
      {
        id: 'tb-2',
        name: 'Paquete 2',
        description: 'El máximo nivel de energía para grandes celebraciones con banda en vivo.',
        equipment: { bajos: 2, bocinas: 3, luces: 8, humo: false, teknobanda: true },
        isFeatured: true,
        whatsappMessage: 'Hola, me interesa el Paquete 2 de Teknobanda.',
      },
      {
        id: 'tb-3',
        name: 'Paquete 3',
        description: 'Para eventos que exigen el máximo impacto con banda en vivo.',
        equipment: { bajos: 3, bocinas: 4, luces: 16, humo: true, teknobanda: true },
        isFeatured: false,
        whatsappMessage: 'Hola, me interesa el Paquete 3 de Teknobanda.',
      },
    ],
  },
];
