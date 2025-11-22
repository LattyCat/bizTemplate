// Registry of all templates
import { titleTemplates } from './title.js';
import { agendaTemplates } from './agenda.js';
import { contentTemplates } from './content.js';
import { imageTemplates } from './image.js';
import { dataTemplates } from './data.js';
import { endTemplates } from './end.js';

export const templates = {
  "Title & Cover": titleTemplates,
  "Agenda & Structure": agendaTemplates,
  "Content & Text": contentTemplates,
  "Visuals & Gallery": imageTemplates,
  "Data & Infographics": dataTemplates,
  "Team & Closing": endTemplates,
};
