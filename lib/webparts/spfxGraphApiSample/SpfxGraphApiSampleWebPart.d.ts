import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface ISpfxGraphApiSampleWebPartProps {
    description: string;
}
export default class SpfxGraphApiSampleWebPart extends BaseClientSideWebPart<ISpfxGraphApiSampleWebPartProps> {
    render(): void;
    private _renderTeamsJoined;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SpfxGraphApiSampleWebPart.d.ts.map