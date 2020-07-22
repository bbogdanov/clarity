---
title: Overview
toc: true
---

A tree is a hierarchical component that gives users access to a hierarchical set of objects displayed in a the parent-child relationship.

## Usage

Use a tree view to visually display hierarchical information. The user can expand, collapse, and select a tree node within a tree view.

## Types

### Basic Tree

<ClrRow>
<ClrCol>
<p>
A basic tree provides a tree structure with named nodes and an arrow to expand and collapse child nodes.
</p>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Basic Tree" src="/images/components/tree-view/basic-tree.png" />
</DocInset>
</ClrCol>
</ClrRow>

### Basic Tree With Icons

<ClrRow>
<ClrCol>
<p>
A tree can include icons to represent the type of nodes within that group. Icons appear between the collapse/expand arrow and the parent node title.
</p>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Basic Tree" src="/images/components/tree-view/icon-tree.png" />
</DocInset>
</ClrCol>
</ClrRow>

### Checkbox Tree

<ClrRow>
<ClrCol>
<p>
A checkbox tree features checkboxes between the collapse/expand arrow and the name to indicate whether a node is selected. A parent node with children that are both selected and not selected is shown with an “indeterminate” state.
</p>
<p>
Checkbox trees should not be used together with icons for the nodes. As with icon trees, make sure to put checkboxes on all nodes of a checkbox tree. Do not alternate between types of trees in a checkbox tree.
</p>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Basic Tree" src="/images/components/tree-view/checkbox-tree.png" />
</DocInset>
</ClrCol>
</ClrRow>

## Anatomy

The styling of each piece of a tree node is consistent across the different types of trees.

### Touch Targets

<ClrRow>
<ClrCol>
<div>
The dimensions of the expand/collapse arrow and the node title allow for a comfortable touch target allowing use with a mouse or a touch screen.
</div>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Tree view touch targets" src="/images/components/tree-view/touch-tree.svg" />
</DocInset>
</ClrCol>
</ClrRow>

<cds-alert-group status="warning" type="default">
<cds-alert>Touch Targets are relevant even outside of a mobile form factor. Many new desktop environments, especially those running Windows, allow for the use of a touch screen and should be considered when designing your applications.</cds-alert>
</cds-alert-group>

## Behavior

Common terminology that explains tree behavior.

<ClrRow>
<ClrCol>
<div class="custom-block">
<strong>Highlight</strong>
<p>Click on a node in the tree to either “highlight” it or navigate to its relative content.</p>
</div>
</ClrCol>
<ClrCol>
<div class="custom-block">
<strong>Select</strong>
<p>Choose items to apply an action. For example, selecting a checkbox in the tree.</p>
</div>
</ClrCol>
<ClrCol>
<div class="custom-block">
<strong>Expand / Collapse</strong>
<p>Use the arrow to the left of a node to expand or collapse a node in the tree.</p>
</div>
</ClrCol>
</ClrRow>

### Interacting With Nodes

#### Expanding / Collapsing Nodes

<ClrRow>
<ClrCol>
<p>
To expand or collapse a parent node, the user clicks on the expand/collapse arrow. Clicking on the node item itself does not expand or collapse a node. It serves as a highlighting mechanism.
</p>
<p>
In read-only trees where highlighting is not an option, this pattern remains true for consistency.
</p>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Expand and collapse tree node" src="/images/components/tree-view/expand-collapse-node.png" />
</DocInset>
</ClrCol>
</ClrRow>

#### Highlighting Tree Nodes

<ClrRow>
<ClrCol>
<p>
To navigate to a content area based on a tree node or to highlight a tree node in order to take a subsequent action based on the selection, a user clicks on the node title itself.
</p>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Expand and collapse tree node" src="/images/components/tree-view/highlight-node.png" />
</DocInset>
</ClrCol>
</ClrRow>

[//]: # 'IMAGE - dashboard'

#### Interacting With Checkbox Trees

<ClrRow>
<ClrCol>
<p>
With a checkbox tree, a user is able to perform one or a combination of three actions by clicking on one of three distinct targets:
</p>
<ol class="custom-block">
<li class="custom-block">Expanding and Collapsing: a user is able to perform this action by clicking on the expand / collapse arrow.</li>
<li class="custom-block">Checking a Checkbox: this would require clicking on the checkbox itself to check or uncheck a treenode. This will also affect the status of the parent node’s checkbox.</li>
<li class="custom-block">Highlighting Tree Node: a user can highlight a tree node by clicking on the name (label) of the tree node. This allows for the possibility of loading content based on selection to provide more information on a tree node.</li>
</ol>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Interacting with checkboxes" src="/images/components/tree-view/checkbox-interaction.png" />
</DocInset>
</ClrCol>
</ClrRow>

[//]: # 'IMAGE - view privileges'

### Loading Data

The way to load data within the tree is based on the scenario in which the tree is being used.

<ClrRow>
<ClrCol>
#### Load Parent Nodes First
<p>With a dynamic tree, make sure to load the parent nodes first and then lazy load child nodes when requested.</p>

<p>A general goal to keep in mind is that you want to minimize the time a user needs to spend before their first interaction with the tree as well as every subsequent interaction afterwards.</p>
</ClrCol>
<ClrCol>
<DocInset>
<ClrImage title="Loading data" src="/images/components/tree-view/loading-node.png" />
</DocInset>
</ClrCol>
</ClrRow>

## Code & Examples

### Basic tree

A basic tree can be created by simply nesting `clr-tree-node` components at will. To pre-expand a node, you can use the `[clrExpanded]` input.

<cds-alert-group status="warning" type="default">
<cds-alert>Please note that every tree requires to have root node to work properly, this is done by having clr-tree as root wrapper, please check the example below.</cds-alert>
</cds-alert-group>

![Basic Tree](/images/components/tree-view/basic-tree-demo.png)
<doc-demo src="/demos/tree-view/basic-ng.html"/></doc-demo>

### Tracking expanded nodes

Use two-way binding `[(clrExpanded)]="expanded"` on the [clrExpanded](/components/tree-view/api.html#properties) property to track when a node is expanded or collapsed.
<doc-demo src="/demos/tree-view/expanded-ng.html"/></doc-demo>

### Routing with a tree

Use the `.clr-treenode-link` class to style content inside of a Tree Node as clickable. Indicate an active Tree Node with the `.active` class combined with the `.clr-treenode-link` class.
<doc-demo src="/demos/tree-view/routed-ng.html"/></doc-demo>

### Generating a tree dynamically

When the tree structure is large and complex you can use iteration to generate nodes and child nodes based on the structure given to the [ClrTree](/components/tree-view/api.html#clrtree).

![Dynamically Generated Tree](/images/components/tree-view/dynamic-tree.png)

#### Tree element

<doc-demo src="/demos/tree-view/dynamic.html" />

#### Tree typeScript

<doc-demo src="/demos/tree-view/dynamic.ts" />

### Checkbox tree

Use checkbox when nodes of the tree need to be selected or unselected by users. There are three parts that are needed to implement a [ClrTree](/components/tree-view/api.html#clrtree) with checkbox controls.

1. Data structured in a tree hierarchy
1. The correct declaration on the [ClrTreeNode](/components/tree-view/api.html#clrtreenode)'s that need to be selectable
1. A ClrSelectedState for each node that is selectable

<ClrRow class="custom-block">
<ClrCol>
<ClrImage title="Checkbox Tree" src="/images/components/tree-view/checkbox-tree-demo.png" />
</ClrCol>
<ClrCol>

#### Checkbox JSON

<doc-demo src="/demos/tree-view/checkbox.json" />
</ClrCol>
</ClrRow>

#### Checkbox element

<doc-demo src="/demos/tree-view/checkbox-ng.html" />

#### Checkbox typeScript

<doc-demo src="/demos/tree-view/checkbox.ts" />

### Binding selection to a boolean

If you know a specific node can never become indeterminate, you probably want to use a boolean property on your node. As mentioned previously, `[(clrSelected)]` always outputs [ClrSelectedState](/components/tree-view/api.html#properties) enum values, making two-way binding with a boolean problematic. The most straightforward solution is to use the de-sugarized syntax of the two-way binding , transforming the output to a boolean directly.

<ClrRow class="custom-block">
<ClrCol>
<!-- cannot project md images here and ClrImage w/ height distorts the image -->
<img src="/images/components/tree-view/checkbox-binding-demo.png" alt="Checkbox Tree" height="500">
</ClrCol>
<ClrCol>

#### Checkbox JSON

<doc-demo src="/demos/tree-view/checkbox-binding.json" />
</ClrCol>
</ClrRow>

#### Binding element

<doc-demo src="/demos/tree-view/checkbox-binding-ng.html" />

#### Binding TypeScript

<doc-demo src="/demos/tree-view/checkbox-binding.ts" />

### Recursive tree

If the data you are displaying is recursive or has an unknown depth, you can use our `*clrRecursiveFor` structural directive to recursively iterate over your data. It has the same syntax as `*ngFor`, and accepts an additional `getChildren` parameter that receives a node and should return its children. Please note that it needs to be used inside of a `<clr-tree>` to function properly.

![Recursive Tree](/images/components/tree-view/recursive-tree-demo.png)

#### Recursive element

<doc-demo src="/demos/tree-view/recursive-ng.html" />

#### Recursive TypeScript

<doc-demo src="/demos/tree-view/recursive-ng.ts" />

### Lazy loading child nodes

If your tree is too large to be fully build on initialization or getting the children of a node is an expensive operation like an HTTP request, you might want to lazy-load tree nodes, only loading the ones that are currently displayed. To lazy-load children for a simple tree component, you need to combine several features as follows:

- Use our `<clr-tree>` root component, giving it a `[clrLazy]="true"` input
- leverage our `*clrIfExpanded` structural directive, it only instantiates children when they are displayed
- listen to the `(clrIfExpandedChange)` output to fetch the children's data
- add a `[clrLoading]` boolean input to the node if fetching children is asynchronous, to display a spinner while waiting for the data to be loaded

![Recursive Tree](/images/components/tree-view/lazy-tree.gif)

#### Lazy tree element

<doc-demo src="/demos/tree-view/lazy-ng.html" />

#### Lazy tree TypeScript

<doc-demo src="/demos/tree-view/lazy-tree.ts" />
