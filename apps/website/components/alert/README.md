---
title: Overview
toc: true
---

Alerts are banners that are designed to draw the users attention to an important message. Icons and color indicate the type and urgency of the information contained within the message.

## Usage

Use alerts to grab the user’s attention to provide critical information needed in context.

## Types

There are two types of alerts, standard alerts and app level alerts.

<ClrRow>
<ClrCol>
<DocInset>
   <ClrImage alt="Standard Alerts" src="/images/components/alert/standard-alert.png" />
</DocInset>
<h3>Standard alerts</h3>
<p>Standard alerts are used in the context of an application either in the content area itself or within components.</p>
<p>There are four different sub-types of standard alerts: error, warning, info, and success.</p>
<p>Ordered standard alerts by the urgency in which the user needs to pay attention to: error, warning, info, then success. In the case there are multiple of each sub-type all of them are shown before another sub-type is reached. For example, multiple errors are shown before the first warning is.</p>
</ClrCol>
<ClrCol>
<DocInset>
   <ClrImage title="App Alerts" src="/images/components/alert/app-alert.png" />
</DocInset>
<h3>App-Level Alerts</h3>
<p>App-level alerts are used in the global context of an application. They are placed at the very top of all content and navigation.</p>
<p>There are three different sub-types of app-level alerts info, warning, and error.</p>
</ClrCol>
</ClrRow>

### Sub-types

There are four different sub-types of standard alerts: error, warning, info, and success.
Order standard alerts by the urgency in which the user needs to pay attention to: error, warning, info, then success. In the case there are multiple of each sub-type, all of them are shown before another sub-type is reached. For example, multiple errors are shown before the first warning is.

<ClrRow>
<ClrCol>
<DocInset>
<ClrImage title="Error Alert" src="/images/components/alert/error-alert.png" />
</DocInset>
<h4>Error</h4>
<p>Reserved for errors, malfunctions, as well as critical issues like license expiration.</p>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Warning Alert" src="/images/components/alert/warning-alert.png" />
</DocInset>
<h4>Warning</h4>
<p>Reserved for warnings: a message that needs the user attention and acknowledgment but might not cause errors.</p>
</ClrCol>
</ClrRow>

<ClrRow>
<ClrCol>
<DocInset>
<ClrImage title="Info Alerts" src="/images/components/alert/info-alert.png" />
</DocInset>
<h4>Info</h4>
<p>Reserved for errors, malfunctions, as well as critical issues like license expiration.</p>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Success Alert" src="/images/components/alert/success-alert.png" />
</DocInset>
<h4>Success</h4>
<p>Reserved to provide to a static persistent success message.</p>
</ClrCol>
</ClrRow>

### Anatomy

A standard alert consist of an icon, a message, and optional actions in a container. -Left align the icon and message. Right aligned the actions.

### Size

<ClrRow>
<ClrCol>
<p>There are two sizes of standard alerts: default and compact. Use the compact alert only in places where vertical space is scarce and information density is needed. Cards provide a good example here.</p>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Success Alert" src="/images/components/alert/sizes.png" />
</DocInset>
</ClrCol>
</CLrRow>

### Placement

Standard alerts are used in the context of an application either in the content area itself or within components.

#### In Modals

![Alert in modal](/images/components/alert/modal.png)

Alerts could appear within modals. It is recommended that no more than one alert appear within a modal. Their function should not be to validate, validation should be done inline and closer to the error itself.

#### In Cards

<ClrRow>
<ClrCol>
<p>It is recommended to use concise language as you share an alert within a card. It is also recommended to use a compact-size alert. The focus of the alert should be on its content not on the alert appearing in it.</p>

<p>It is also recommended to have an alert at the very top of a card, on top of its title. An alert is meant to attract the attention of the user.</p>

<p>Using more than one alert within a card distracts the user and dilutes the importance of the alerts displayed.
There are three sub-types of app-level alerts: error, warning, and info.</p>
</ClrCol>
<ClrCol>
<DocInset>

<ClrImage title="Alert in card" src="/images/components/alert/card.png" />
</DocInset>
</ClrCol>
</ClrRow>

## App-Level Alerts

App-level alerts are used in the global context of an application. They are placed at the very top of all content and navigation.

### Sub-types

There are three different sub-types of app-level alerts info, warning, and error.
App-level alerts follow the same urgency order as standard alerts: error, warning, and info.

**Why no success app-level alert?**
App-level alerts are global in nature. Reporting a success of an operation should either be communicated within context or as a notification message.

### Anatomy

An app-level alert consist of an icon, a message, and optional actions in a container. - All elements are centered-aligned. -Add anatomy for inline alerts - Need to add pagination

## Placement

App-level alerts are placed at the very top of the global context. They should not be placed in any other configuration. Their purpose is to provide global alerts available and relating to the full context of the overall application.

<ClrImage title="App Level Warning Alert" src="/images/components/alert/app_level_placement.png" />

## Content

Depending on the sub-type of a standard alert, make sure to communicate a clear, concise, and actionable message.

## Accessibility

<cds-alert-group status="warning" type="default">
   <cds-alert>Actionable controls inside dynamically generated alerts are not accessible to screen reader users! For this reason Clarity does not recommend using dropdowns, buttons, links inside alerts that appear as dynamic notifications.</cds-alert>
</cds-alert-group>

Accessibility problems related to using actionable controls inside dynamically generated alerts:

- They are announced as part of the alert message, which is out of context and may be confusing. For example, the following alert will be announced as "success acknowledge":
  TODO Fix core components (maybe it cannot be used in the markdown rendering)
- There is no way for the user to directly interact with the announced action controls.

It is acceptable to use actions in static alerts. The following guidelines are recommended:

- Controls can be dropdown, button or link elements.
- Buttons should be used for actions, links for navigation.
- The text for these controls should be as descriptive as possible.
  <cds-alert-group type="default" status="warning">
  <cds-alert closable>Acknowledge
  <cds-alert-actions>
  <cds-button>Action Link</cds-button>
  </cds-alert-actions>
  </cds-alert>
  </cds-alert-group>

## Code & Examples

### Types

Clarity has error, warning, information, and success alerts denoted by the following classes:

- .alert-danger
- .alert-warning
- .alert-info
- .alert-success

<doc-demo src="/demos/alert/types-ng.html" demo="/demos/alert/types-css.html" />

### Placement

#### Alerts in content area

<doc-demo src="/demos/alert/placement-ng.html" demo="/demos/alert/placement-css.html" />

#### Alerts in cards

<doc-demo src="/demos/alert/card-ng.html" demo="/demos/alert/card-css.html" />

#### Alerts in modals

<doc-demo src="/demos/alert/modal-ng.html" demo="/demos/alert/modal-css.html" />

### Size

Use the .alert-sm class with .alert for an alert 24 pixels in height. The default is 36 pixels.

<doc-demo src="/demos/alert/size-ng.html" demo="/demos/alert/size-css.html" />

### App-Level Alerts

#### Basic

**.alert-app-level**
This class must be applied with .alert to render an app-level alert.

<doc-demo src="/demos/alert/basic-app-level-ng.html" demo="/demos/alert/basic-app-level-css.html" />

#### Main Container

**.alert-app-level**
This class must be applied with .alert to render an app-level alert.

<doc-demo src="/demos/alert/main-container-ng.html" demo="/demos/alert/main-container-css.html" />
