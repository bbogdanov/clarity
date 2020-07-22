---
title: Overview
toc: true
---

Badges are status modifiers to other elements which display the numerical value within an element either next to it or inside the element itself.

## Usage

Badges have a colorful, bold, and filled style that makes them stand out when appearing within or next to another component. Badges are also small enough to fit next to or within another element.

- Use a badge to highlight the count. Badge can be used in a label as count relating to the metadata.
- Use a label to show metadata. It is usually text content

## Anatomy

### Basic

<ClrRow>
<ClrCol>
<h3>Overall Style</h3>
<p>Badges have a more rounded border radius, similar to labels, to distinguish them from primary buttons.</p>
<p>Badges are also small enough to fit next to or within another element.</p>
</ClrCol>
<ClrCol>
<DocInset>

<section class="inline-code">
    <div role="treeitem" tabindex="0" class="clr-tree-node-content-container" aria-expanded="false">
        <button aria-hidden="true" type="button" tabindex="-1" class="clr-treenode-caret">
            <clr-icon shape="caret" class="clr-treenode-caret-icon" role="none" dir="right"></clr-icon>
        </button>
        <div class="clr-treenode-content">
        <div class="margin-right-0_25">Inbox&nbsp;</div>
            <span class="badge badge-info">1 </span>
        </div>
    </div>
    <div role="treeitem" tabindex="0" class="clr-tree-node-content-container" aria-expanded="false">
        <button aria-hidden="true" type="button" tabindex="-1" class="clr-treenode-caret">
            <clr-icon shape="caret" class="clr-treenode-caret-icon" role="none" dir="right"></clr-icon>
        </button>
        <div class="clr-treenode-content">
        <div class="margin-right-0_25">Folders&nbsp;</div>
            <span class="badge badge-info">12 </span>
        </div>
    </div>
</section>
</DocInset>
</ClrCol>
</ClrRow>

<ClrRow class="custom-block">
<ClrCol>
<h3>Color</h3>
<p>You can use different colors in badges.</p>
<p>Stoplight colors are reserved to display a sense of urgency or indicate state.</p>
</ClrCol>
<ClrCol>
<DocInset height="100" class="custom-block">

<section class="inline-code">
    <div><b>Notifications </b><span class="badge badge-info"> 12</span></div>
    <div><b>Alerts </b><span class="badge badge-danger"> 12</span></div>
</section>

</DocInset>
</ClrCol>
</ClrRow>

## Content

Use integers within badges. If you’re attempting to use text, consider using a label instead.

<ClrRow class="custom-block">
<ClrCol>
<h3>Over 99</h3>
<p>If a badge needs to display a number above 99, use “99+” instead of the number unless the number is important to the user’s objectives and you are certain there is room in the design to accommodate it.</p>
</ClrCol>
<ClrCol>
<DocInset height="100" class="custom-block">

<section class="inline-code horizontal">
<div>
    <span class="label label-orange">
        London (Location)
        <span class="badge badge-orange">14</span>
    </span>
    <span class="label label-orange">
        Austin (Location)
        <span class="badge badge-orange">99+</span>
    </span>
</div>
</section>

</DocInset>
</ClrCol>
</ClrRow>

## Code & Examples

### Color Options

<doc-demo src="/demos/badge/colors-ng.html" demo="/demos/badge/colors-css.html" />

### Status Options

<doc-demo src="/demos/badge/status-ng.html" demo="/demos/badge/status-css.html" />
