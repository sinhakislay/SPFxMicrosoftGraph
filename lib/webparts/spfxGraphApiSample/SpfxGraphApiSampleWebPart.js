var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './SpfxGraphApiSampleWebPart.module.scss';
import * as strings from 'SpfxGraphApiSampleWebPartStrings';
var SpfxGraphApiSampleWebPart = /** @class */ (function (_super) {
    __extends(SpfxGraphApiSampleWebPart, _super);
    function SpfxGraphApiSampleWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxGraphApiSampleWebPart.prototype.render = function () {
        var _this = this;
        this.context.msGraphClientFactory
            .getClient()
            .then(function (client) {
            // get information about the current user from the Microsoft Graph for Teams Joined
            client
                .api('/me/joinedTeams')
                .select('id,displayName')
                .get(function (error, teamColl, rawResponse) {
                _this.domElement.innerHTML = "\n        <div class=\"" + styles.spfxGraphApiSample + "\">  \n        <div class=\"" + styles.container + "\">\n          <div class=\"" + styles.row + "\">\n            <div class=\"" + styles.column + "\">\n              <span class=\"" + styles.title + "\">Welcome to SYNK Ventures SharePoint Demo!</span>\n              <p class=\"" + styles.subTitle + "\">How to Use Microsoft Graph in SharePoint Framework.</p>\n              My YouTube Channel\n              <a href=\"https://www.youtube.com/channel/UC6vLzWN-3aFG8dgTgEOlx5g\">link</a>\n              <div id=\"spListContainer\" />\n            </div>\n          </div>\n        </div>\n        </div>";
                // List the Teams joined with and Display Name
                _this._renderTeamsJoined(teamColl.value);
            });
        });
    };
    SpfxGraphApiSampleWebPart.prototype._renderTeamsJoined = function (messages) {
        var html = '';
        for (var index = 0; index < messages.length; index++) {
            html += "<p class=\"" + styles.description + "\">Team " + (index + 1) + " - " + escape(messages[index].id) + " -  " + escape(messages[index].displayName) + "</p>";
            // Add the Teams to the placeholder
            var listContainer = this.domElement.querySelector('#spListContainer');
            listContainer.innerHTML = html;
        }
    };
    Object.defineProperty(SpfxGraphApiSampleWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SpfxGraphApiSampleWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return SpfxGraphApiSampleWebPart;
}(BaseClientSideWebPart));
export default SpfxGraphApiSampleWebPart;
//# sourceMappingURL=SpfxGraphApiSampleWebPart.js.map