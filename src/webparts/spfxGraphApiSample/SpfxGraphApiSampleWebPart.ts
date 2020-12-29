import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SpfxGraphApiSampleWebPart.module.scss';
import * as strings from 'SpfxGraphApiSampleWebPartStrings';
import { MSGraphClient } from '@microsoft/sp-http';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';

export interface ISpfxGraphApiSampleWebPartProps {
  description: string;
}

export default class SpfxGraphApiSampleWebPart extends BaseClientSideWebPart<ISpfxGraphApiSampleWebPartProps> {

  public render(): void {
    this.context.msGraphClientFactory
    .getClient()
    .then((client: MSGraphClient): void => {
      // get information about the current user from the Microsoft Graph for Teams Joined
      client
      .api('/me/joinedTeams')
      .select('id,displayName')  
      .get((error: any, teamColl, rawResponse: any) => {
  
        this.domElement.innerHTML = `
        <div class="${ styles.spfxGraphApiSample}">  
        <div class="${ styles.container}">
          <div class="${ styles.row}">
            <div class="${ styles.column}">
              <span class="${ styles.title}">Welcome to SYNK Ventures SharePoint Demo!</span>
              <p class="${ styles.subTitle}">How to Use Microsoft Graph in SharePoint Framework.</p>
              My YouTube Channel
              <a href="https://www.youtube.com/channel/UC6vLzWN-3aFG8dgTgEOlx5g">link</a>
              <div id="spListContainer" />
            </div>
          </div>
        </div>
        </div>`;
  
        // List the Teams joined with and Display Name
        this._renderTeamsJoined(teamColl.value);
        
  
      });
    });
  }

  private _renderTeamsJoined(messages: MicrosoftGraph.Team[]): void {
    
    
    
    let html: string = '';
    for (let index = 0; index < messages.length; index++) {
      
      html += `<p class="${styles.description}">Team ${index + 1} - ${escape(messages[index].id)} -  ${escape(messages[index].displayName)}</p>`;
      
      
    
  
    // Add the Teams to the placeholder
    const listContainer: Element = this.domElement.querySelector('#spListContainer');
    listContainer.innerHTML = html;
  }
}
  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
